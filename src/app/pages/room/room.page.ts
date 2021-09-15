import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoomService } from 'src/app/services/Room/room.service';

import { AsmblRoomInterface } from 'src/app/shared/sdk';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  groupId: string = "";
  rooms: AsmblRoomInterface[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

    private room:RoomService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.groupId = params.groupId;
    });
  }

  ionViewWillEnter() {
    this.getAllRooms()
  }

  addRoom() {
    // Add Group
    this.router.navigate(['/add-room'], { queryParams: { groupId: this.groupId } });
  }

  getAllRooms(){
    this.room.getAllRoomsByGroupId(this.groupId).then(res=>{
      console.log(res)
      if(res.success){
        this.rooms=res.data
      }
    })
  }
  openActivity(roomId:string) {
    this.router.navigate(['/activity'], { queryParams: { roomId: roomId  } });
  }

}
