import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities, Rooms } from 'src/app/services/dtos.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  groupId: string = "";
  rooms: Rooms[] = [
    {
      "id": '1',
      "title": 'Room 1'
    },
    {
      "id": '2',
      "title": 'Room 2'
    },
    {
      "id": '3',
      "title": 'Room 3'
    }
  ]
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.groupId = params.groupId;
    });
  }

  openActivity(roomId:string) {
    this.router.navigate(['/activity'], { queryParams: { roomId: roomId  } });
  }

}
