import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddParticipantsComponent } from 'src/app/components/addGroup/add-participants/add-participants.component';

import { GroupDetailsComponent } from 'src/app/components/addGroup/group-details/group-details.component';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {

  @ViewChild('groupDetails') groupDetails: GroupDetailsComponent;
  @ViewChild('addParticipants') addParticipants: AddParticipantsComponent;
  page: string = "GROUP_DETAILS";
  groupName: string = "";
  description: string = "";

  constructor(
    private router:Router,
    private util: UtilService,
  ) { }

  ngOnInit() {
  }

  async nextPressed() {
    if(this.page == "GROUP_DETAILS") {
      // Check if group name and description is empty
      if(this.groupDetails.isValid()) {
        // Persist Grp Details
        this.description = this.groupDetails.description;
        this.groupName = this.groupDetails.groupName;
        // Move on to add Participants
        this.page = "ADD_PARTICIPANTS"
      } else {
        this.util.showToast("Please fill all the details", 'top');
      }
    } else if(this.page == "ADD_PARTICIPANTS") {
      // Check if atleast one participant selected
      if(this.addParticipants.isValid()) {
        var creatingToast = await this.util.showToast("Creating Your Group", 'bottom', 0, true);
        this.router.navigate(['/group']);
        
        // Create a Group
        // Putting Timout to show Async Time-lag
        setTimeout(() => {
          creatingToast.dismiss();
          this.util.showToast("Group Successfully Created", 'top', 1500);
        }, 2000);
      }
    }
  }

  backPressed() {
    if (this.page == "GROUP_DETAILS") {
      this.router.navigate(['/group'])
    } else if (this.page == "ADD_PARTICIPANTS") {
      this.page = "GROUP_DETAILS"
    }
  }

}
