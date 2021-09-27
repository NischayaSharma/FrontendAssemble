import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { RoomService } from 'src/app/services/Room/room.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  roomId:string = "";
  activities:Array<any>=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService:RoomService,
    private actionSheetController: ActionSheetController,
    private localNotifications: LocalNotifications,
    private vibration: Vibration,
    private nativeAudio: NativeAudio
    
  ) { }

  soundSuccess() {
    console.log("Sound Success");
  }
  soundError() {
    console.log("Sound Error");
  }

  ngOnInit() {
    console.log("Activity")
   
    this.getRoom()
  }

  getRoom(){
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.roomId = params.roomId;
      this.roomService.getRoomById(this.roomId).then(res=>{
        if(res.success){
          this.activities=res.data.ActivityList
        }
        else{
          console.log("Error fetching room")
        }
        if(this.activities.length==0){
          console.log("No rooms found---->Display none Message")
        }
        console.log(this.activities)
      })
    });
  }

  setSound() {
    return 'file://assets/song.mp3'
  }

  async openActionSheet(activity:string){
    var actionSheet = await this.actionSheetController.create({
      header: 'What do you want to do?',
      mode: 'ios',
      buttons: [ {
        text: 'Alert',
        handler: () => {
          console.log('Share clicked');
          this.alertParticipants(activity)
        }
      },{
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }],
    });
    actionSheet.present();
  }

  alertParticipants(activity:string){
    // this.nativeAudio.play('uniqueId1').then((res) => {
    //   console.log("Success===>", res);
    // }, (res) => {
    //   console.log("Error===>", res);
    // });
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/song.mp3').then((res) => {
      this.nativeAudio.play('uniqueId1')
      console.log("Success===>", res);
    }, (res) => {
      console.log("Error===>", res);
    });
    this.localNotifications.schedule({
      title: 'The big lasjdlasjdsurvey',
      text: 'Are you a fan of RB Leipzig?',
      sound: this.setSound(),
      priority:1,
      launch:true,
      vibrate:true,
      actions: [
        { id: 'yes', title: 'Yes' },
        { id: 'trigger',  title: 'trigger' }
    ]
  });

  this.localNotifications.on('yes').subscribe(res=>{
    console.log("Yes clicked")
  })

  this.localNotifications.on('trigger').subscribe(() => {
    console.log("Trigger clicked")
        this.vibration.vibrate([100, 200, 400, 200, 100]);
    });
  }
}
