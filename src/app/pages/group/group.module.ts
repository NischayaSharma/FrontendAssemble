import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GroupPage } from './group.page';

import { GroupPageRoutingModule } from './group-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule
  ],
  declarations: [GroupPage]
})
export class GroupPageModule {}
