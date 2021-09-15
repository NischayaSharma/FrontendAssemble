import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AddParticipantsComponent } from 'src/app/components/add-participants/add-participants.component';
import { RoomDetailsComponent } from 'src/app/components/addRoom/room-details/room-details.component';

import { RoomService } from 'src/app/services/Room/room.service';
import { UserService } from 'src/app/services/User/user.service';
import { UtilService } from 'src/app/services/util.service';

import { AsmblRoomParticipantInterface, AsmblRoomInterface } from 'src/app/shared/sdk';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
  @ViewChild('roomDetails') roomDetails: RoomDetailsComponent;
  @ViewChild('addParticipants') addParticipants: AddParticipantsComponent;
  page: string = "ROOM_DETAILS";
  room: AsmblRoomInterface = {
    Name: 'Room 1',
    ActivityList: [
      'Coding',
      'Reading',
      'Sleeping',
      'Eating',
    ],
  };
  roomParticipants: AsmblRoomParticipantInterface[] = [];
  userId: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

    private roomService: RoomService,
    private user: UserService,
    private util: UtilService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("Params ======>", params);
      if (params['groupId']) {
        this.room.GroupId = params['groupId'];
      };
    })

  }

  async nextPressed() {
    if (this.page == "ROOM_DETAILS") {
      // Check if room name and description is empty
      if (this.roomDetails.isValid()) {
        // Persist Grp Details
        this.room.ActivityList = this.roomDetails.activityList;
        this.room.Name = this.roomDetails.roomName;
        // Move on to add Participants
        this.page = "ADD_PARTICIPANTS"
      } else {
        this.util.showToast("Please fill all the details", 'top');
      }
    } else if (this.page == "ADD_PARTICIPANTS") {
      // Check if atleast one participant selected
      if (this.addParticipants.isValid()) {
        this.userId = this.user.$currentUser.Id;
        this.roomParticipants.push({ UserId: this.userId, IsAdmin: true });
        var creatingRoomToast = await this.util.showToast("Creating Your Room", 'bottom', 0, true);
        this.router.navigate(['/room']);

        // Create a Room
        var response = await this.roomService.createRoom(this.room, this.roomParticipants)
        creatingRoomToast.dismiss();
        if (response.success) {
          this.util.showToast("Room Successfully Created", 'top', 1500);
        } else {
          this.util.showToast("Error Creating Room", 'top', 3000);
        }
      }
    }
  }

  backPressed() {
    if (this.page == "ROOM_DETAILS") {
      this.router.navigate(['/room'])
    } else if (this.page == "ADD_PARTICIPANTS") {
      this.page = "ROOM_DETAILS"
    }
  }


}
