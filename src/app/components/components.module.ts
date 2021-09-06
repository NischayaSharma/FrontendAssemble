import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IonicModule } from "@ionic/angular";
import { GroupDetailsComponent } from "./addGroup/group-details/group-details.component";
import { AddParticipantsComponent } from "./addGroup/add-participants/add-participants.component";

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
    ],
    exports: [
        AddParticipantsComponent,
        GroupDetailsComponent,
    ]
})

export class ComponentsModule { }