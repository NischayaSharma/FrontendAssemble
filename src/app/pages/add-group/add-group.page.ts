import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AddParticipantsComponent } from 'src/app/components/add-participants/add-participants.component';
import { GroupDetailsComponent } from 'src/app/components/addGroup/group-details/group-details.component';
import { GroupService } from 'src/app/services/Group/group.service';
import { UserService } from 'src/app/services/User/user.service';
import { UtilService } from 'src/app/services/util.service';

import { AsmblGroupInterface, AsmblGroupParticipantInterface } from 'src/app/shared/sdk';



@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {

  @ViewChild('groupDetails') groupDetails: GroupDetailsComponent;
  @ViewChild('addParticipants') addParticipants: AddParticipantsComponent;
  page: string = "GROUP_DETAILS";
  group: AsmblGroupInterface = {
    Name: '',
    Description: '',
  };
  groupParticipants: AsmblGroupParticipantInterface[] = [];
  userId: string=''

  constructor(
    private router: Router,

    private groupService: GroupService,
    private util: UtilService,
    private user:UserService,
  ) { }

  ngOnInit() {
  }

  async nextPressed() {
    if (this.page == "GROUP_DETAILS") {
      console.log();
      // Check if group name and description is empty
      if (this.groupDetails.isValid()) {
        // Persist Grp Details
        this.group.Description = this.groupDetails.description;
        this.group.Name = this.groupDetails.groupName;
        // Move on to add Participants
        this.page = "ADD_PARTICIPANTS"
      } else {
        console.log("Heree in toast")
        this.util.showToast("Please fill all the details", 'bottom');
      }
    } else if (this.page == "ADD_PARTICIPANTS") {
      // Check if atleast one participant selected
      if (this.addParticipants.isValid()) {
        this.userId = this.user.$currentUser.Id;
        this.groupParticipants.push({ UserId: this.userId, IsAdmin: true });
        var creatingGroupToast = await this.util.showToast("Creating Your Group", 'bottom', 0, true);
        this.router.navigate(['/group']);

        // Create a Group
        var response = await this.groupService.addGroup(this.group, this.groupParticipants)
        creatingGroupToast.dismiss();
        if (response.success) {
          this.util.showToast("Group Successfully Created", 'top', 1500);
        } else {
          this.util.showToast("Error Creating Group", 'top', 3000);
        }
      }
    }
  }

  backPressed() {
    if (this.page == "GROUP_DETAILS") {
      this.router.navigate(['/group'])
    } else if (this.page == "ADD_PARTICIPANTS") {
      this.page = "GROUP_DETAILS"
    }
  }

}
