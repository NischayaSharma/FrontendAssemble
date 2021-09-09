import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private user: UserService,
    private util: UtilService,
    private router: Router
  ) { }
  username: string
  usernameRegex = `^[A-Za-z0-9_]*$`
  errorMssg: string = '';
  ngOnInit() {
  }

  async register() {
    if (this.username.length < 4 && this.username.length > 15) {
      this.errorMssg = 'Username must be between 4-15 characters'
    } else
      if (!this.username.match(this.usernameRegex)) {
        this.errorMssg = 'Please enter a valid username (only A-Z and _)'
      } else {
        this.errorMssg = ''
      }
    var deviceId = await this.util.getDeviceId()
    this.user.createUser(deviceId, this.username).then(async res => {
      if (res.success) {
        await this.user.setUser(deviceId)
        this.router.navigate(['/group'])
      } else {
        this.errorMssg = res.message
      }
    })
  }

}
