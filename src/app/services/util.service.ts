import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private toastController: ToastController,
  ) { }

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
    console.log(toastOptions);
    const toast = await this.toastController.create(toastOptions);
    toast.present()
    return toast;
  }
}
