import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { UserService } from './services/User/user.service';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router:Router,
    private zone: NgZone,
    private plt:Platform,

    private util: UtilService,
    private user: UserService,
  ) {
    this.authenticate();
  }
  async authenticate(){
    this.plt.ready().then(async () => {
      var deviceId = await this.util.getDeviceId();
      var deviceIdExists = await this.user.deviceIdExists(deviceId)
      console.log("deviceIdExists ======>", deviceIdExists)
      if(deviceIdExists.success){
        if(deviceIdExists.data.exists){
          console.log("Redirecting to group")
          await this.user.setUser(deviceId);
          this.router.navigateByUrl('/group')
        }else{
          console.log("Redirecting to register")
          this.router.navigate(['/register'])
        }
      } else {
        console.log("ERROR =>", deviceIdExists);
        navigator['app'].exitApp();
      }
    });
  }
}
