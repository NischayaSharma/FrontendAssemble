import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/Group/group.service';
import { UserService } from 'src/app/services/User/user.service';
import { UtilService } from 'src/app/services/util.service';
import { AsmblGroupInterface, AsmblGroupParticipantInterface } from 'src/app/shared/sdk';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html',
  styleUrls: ['group.page.scss'],
})
export class GroupPage implements OnInit {
  participantGroups: AsmblGroupParticipantInterface[] = []

  constructor(
    private router: Router,
    private util: UtilService,
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
    this.groupService.getUserGroups(userId).then(res => {
      if (res.success) {
        console.log("Groups ==> ",res.data);
        this.participantGroups = res.data
      } else {
        this.participantGroups = []
      }
    })
  }

  openRoom(groupId: string) {
    console.log("GroupId===>",groupId);

    // Open Room
    this.router.navigate(['/room'], { queryParams: { groupId: groupId } });
  }



  addGroup() {
    // Add Group
    this.router.navigate(['/add-group']);
  }

}
