import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

import { GroupDetailsComponent } from "./addGroup/group-details/group-details.component";
import { AddParticipantsComponent } from "./add-participants/add-participants.component";
import { RoomDetailsComponent } from "./addRoom/room-details/room-details.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        AddParticipantsComponent,
        GroupDetailsComponent,
        RoomDetailsComponent,
    ],
    exports: [
        AddParticipantsComponent,
        GroupDetailsComponent,
        RoomDetailsComponent,
    ]
})

export class ComponentsModule { }