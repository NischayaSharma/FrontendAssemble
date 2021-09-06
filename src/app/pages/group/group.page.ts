import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from 'src/app/services/dtos.service';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html',
  styleUrls: ['group.page.scss'],
})
export class GroupPage {
  groups: Groups[] = [
    {
      "id": '1',
      "title": "One",
      "subtitle": "One Subtitle"
    },
    {
      "id": '2',
      "title": "Two",
      "subtitle": "Two Subtitle"
    },
    {
      "id": '3',
      "title": "Three",
      "subtitle": "Three Subtitle"
    },
    {
      "id": '4',
      "title": "Four",
      "subtitle": "Four Subtitle"
    },
    {
      "id": '5',
      "title": "Five",
      "subtitle": "Five Subtitle"
    },
  ]

  constructor(
    private router: Router,
  ) { }

  openRoom(groupId: string) {
    console.log(groupId);

    // Open Room
    this.router.navigate(['/room'], { queryParams: { groupId: groupId } });
  }

  addGroup() {
    // Add Group
    this.router.navigate(['/add-group'], { queryParams: { userId: '1234' } });
  }

}
