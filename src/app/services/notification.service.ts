import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private localNotifications: LocalNotifications,
  ) { }

  pushNotification(title: string, text: string, time: number) {
    this.localNotifications.schedule({
      title: title,
      text: text,
      trigger: {at: new Date(new Date().getTime() + time)},
      actions: [
        { id: 'yes', title: 'Yes'},
        { id: 'no', title: 'No' }
      ],
      led: 'FF0000',
      sound: null
    });

    this.localNotifications.on('yes').subscribe(res => {
      console.log("Yes ===> ", res);
    });

    this.localNotifications.on('no').subscribe(res => {
      console.log("No ===> ", res);
    });
  }
}
