import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GroupService } from 'src/app/services/Group/group.service';
import { UserService } from 'src/app/services/User/user.service';

import { AsmblGroupParticipantInterface } from 'src/app/shared/sdk';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html',
  styleUrls: ['group.page.scss'],
})
export class GroupPage implements OnInit {
  grpParticipants: AsmblGroupParticipantInterface[] = []

  constructor(
    private router: Router,

    private groupService: GroupService,
    private user: UserService,
  ) {}
  ngOnInit() {}

  ionViewDidEnter() {
    this.getGroups()
  }

  getGroups() {
    console.log(this.user.$currentUser)
    var userId = this.user.$currentUser.Id
    console.log("userId===>",userId);
    this.groupService.getUserGroups(userId).then(res => {
      console.log("response===>",res)
      if (res.success) {
        console.log("Groups ==> ",res.data);
        this.grpParticipants = res.data
      } else {
        this.grpParticipants = []
      }
      console.log("grpParticipants===>",this.grpParticipants)
    })
  }

  openRoom(groupId: string) {
    console.log("GroupId===>",groupId);
    this.groupService.$groupId = groupId;
    // Open Room
    this.router.navigate(['/room'], { queryParams: { groupId: groupId } });
  }

  addGroup() {
    // Add Group
    this.router.navigate(['/add-group']);
  }

}
