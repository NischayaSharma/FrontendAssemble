import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsmblGroupApi, AsmblGroupInterface, AsmblGroupParticipantApi, AsmblGroupParticipantInterface } from 'src/app/shared/sdk';
import { ApiReturns } from '../dtos.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient,

    private GroupApi: AsmblGroupApi,
    private GroupParticipantApi: AsmblGroupParticipantApi,
  ) { }

  async addGroup(Group: AsmblGroupInterface, GroupParticipants: AsmblGroupParticipantInterface[]): Promise<ApiReturns<{ createGrp: AsmblGroupInterface | any, createGrpParticipants: AsmblGroupParticipantInterface | any } | any>> {
    var createGrp = await this.GroupApi.create<AsmblGroupInterface>(Group).toPromise()
      .then(data => {
        return { success: true, data: data, message: "Group Created Successfully" };
      }).catch(error => {
        return { success: false, data: error, message: "Error in Creating Group" };
      });
    if (createGrp.success) {
      GroupParticipants.forEach(participant => {
        participant.GroupId = createGrp.data.Id;
      })
    }
    console.log("GroupParticipants ==>", GroupParticipants)
    var createGrpParticipants = await this.GroupParticipantApi.createMany<AsmblGroupParticipantInterface>(GroupParticipants).toPromise()
      .then(data => {
        return { success: true, data: data, message: "Participants Added Successfully" };
      }).catch(error => {
        return { success: false, data: error, message: "Error in Adding Participants" };
      });

    var response = { success: false, data: { createGrp: createGrp, createGrpParticipants: createGrpParticipants }, message: "" };
    if (createGrp.success && createGrpParticipants.success) {
      response.success = true;
      response.message = "Group Created and Participants added."
    } else {
      response.success = false;
      response.message = "Error Creating Group."
    }
    console.log(response.message, " ======> ", response);
    return response;
  }

  async getUserGroups(UserId: string): Promise<ApiReturns<AsmblGroupParticipantInterface | any>> {
    console.log("UserId===>", UserId)
    var response = await this.GroupParticipantApi.find<AsmblGroupParticipantInterface>({ where: { UserId: "1" }, include: ['User', 'Group'] }).toPromise()
      .then(data => {
        return { success: true, data: data, message: "Groups Fetched Successfully" };
      }).catch(error => {
        return { success: false, data: error, message: "Error in Fetching Groups" };
      });
    return response;
  }
}
