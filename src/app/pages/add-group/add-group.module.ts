import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGroupPageRoutingModule } from './add-group-routing.module';

import { AddGroupPage } from './add-group.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    AddGroupPageRoutingModule,
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [AddGroupPage]
})
export class AddGroupPageModule {}
