import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private fcm:FCM,

    private toastController: ToastController,
  ) { }

  async getDeviceId() {
    var token = await this.fcm.getToken().then(token => {
      return token;
    });
    return token;
  }

  async showToast(message: string, position: "bottom" | "top" | "middle" = 'bottom', durations: number = 3000, showCloseButton: boolean = false, closeButtonText: string = 'OK') {
    var toastOptions = {
      message: message,
      position: position,
      cssClass: 'toast-css',
    };
    if(showCloseButton) {
      toastOptions['showCloseButton'] = showCloseButton;
    } else {
      toastOptions['duration'] = durations;
    }
    const toast = await this.toastController.create(toastOptions);
    toast.present()
    return toast;
  }
}
