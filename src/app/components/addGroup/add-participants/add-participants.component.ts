import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-add-participants',
  templateUrl: './add-participants.component.html',
  styleUrls: ['./add-participants.component.scss'],
})
export class AddParticipantsComponent implements OnInit {

  constructor(
    private user:UserService
  ) { }
  usernameToSearch:string=''
  ngOnInit() {}

  isValid() {
    return true;
  }

  search(){
    console.log("Search====>",this.usernameToSearch)
    this.user.getUserByUsername(this.usernameToSearch).then(res=>{
      console.log(res.data)
    })
  }

}
