import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {

  @Input() roomName: string = "";
  @Input() activityList: string[] = [];

  activity:string=''

  constructor(public toastController: ToastController) { }

  ngOnInit() {}
  addActivity(){
    if (!this.activityList.includes(this.activity)) {
      this.activityList.push(this.activity)
    }else{
      this.presentToast()
    }
    this.activity=''
  }

  deleteActivity(activity:string){
    this.activityList = this.activityList.filter(e=> e !== activity)
  }

  isValid() {
    return this.roomName.length > 0 && this.activityList.length > 0;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Activity already added.',
      duration: 2000
    });
    toast.present();
  }
}
