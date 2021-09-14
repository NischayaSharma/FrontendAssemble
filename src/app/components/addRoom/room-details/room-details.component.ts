import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {

  @Input() roomName: string = "";
  @Input() activityList: string[] = [];

  activity:string=''

  constructor() { }

  ngOnInit() {}
  addActivity(){
    if (!this.activityList.includes(this.activity)) {
      this.activityList.push(this.activity)
    }
    this.activity=''
  }

  deleteActivity(activity:string){
    this.activityList = this.activityList.filter(e=> e != activity)
  }

  isValid() {
    return this.roomName.length > 0 && this.activityList.length > 0;
  }
}
