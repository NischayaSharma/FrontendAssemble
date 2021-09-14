import { Injectable } from '@angular/core';
import { AsmblRoomApi, AsmblRoomInterface, AsmblRoomParticipantApi, AsmblRoomParticipantInterface } from 'src/app/shared/sdk';
import { ApiReturns } from '../dtos.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private roomParticipantApi: AsmblRoomParticipantApi,
    private roomApi: AsmblRoomApi,
  ) { }

  async getRoomById(roomId: string): Promise<ApiReturns<AsmblRoomInterface | any>> {
    var room = await this.roomApi.findById<AsmblRoomInterface>(roomId).toPromise()
      .then(
        (room: AsmblRoomInterface) => {
          return { success: true, data: room, message: "Room Fetched Successfully." };
        }
      ).catch(
        (error: any) => {
          return { success: false, data: error, message: error.message };
        }
      );
    return room;
  }

  async getAllRoomsByGroupId(groupId: string): Promise<ApiReturns<AsmblRoomInterface | any>> {
    var room = await this.roomApi.find<AsmblRoomInterface>({ where: { GroupId: groupId }, include: ['Group'] }).toPromise()
      .then(
        (room: AsmblRoomInterface[]) => {
          return { success: true, data: room, message: "Room Fetched Successfully." };
        }
      ).catch(
        (error: any) => {
          return { success: false, data: error, message: error.message };
        }
      );
    return room;
  }

  async createRoom(room: AsmblRoomInterface, roomParticipant: AsmblRoomParticipantInterface[]): Promise<ApiReturns<{ roomCreated: AsmblRoomInterface | any, roomParticipantCreated: AsmblRoomParticipantInterface | any } | any>> {
    var roomCreated = await this.roomApi.create<AsmblRoomInterface>(room).toPromise()
      .then(
        (room: AsmblRoomInterface) => {
          return { success: true, data: room, message: "Room Created Successfully." };
        }
      ).catch(
        (error: any) => {
          return { success: false, data: error, message: error.message };
        }
      );
    console.log("Room Created ==> ", roomCreated);
    roomParticipant.forEach((participant: AsmblRoomParticipantInterface) => {
      participant.RoomId = roomCreated.data.Id;
    });
    var roomParticipantCreated = await this.roomParticipantApi.createMany<AsmblRoomParticipantInterface>(roomParticipant).toPromise()
      .then(
        (roomParticipant: AsmblRoomParticipantInterface[]) => {
          return { success: true, data: roomParticipant, message: "Room Participant Created Successfully." };
        }
      ).catch(
        (error: any) => {
          return { success: false, data: error, message: error.message };
        }
      );

    var response = { success: false, data: { roomCreated: roomCreated, roomParticipantCreated: roomParticipantCreated }, message: "" };
    if (roomCreated.success && roomParticipantCreated.success) {
      response.success = true;
      response.message = "Group Created and Participants added."
    } else {
      response.success = false;
      response.message = "Error Creating Group."
    }
    console.log(response.message, " ======> ", response);
    return response;
  }
}
