/* tslint:disable */
import {
  AsmblRoom,
  AsmblUser
} from '../index';

declare var Object: any;
export interface AsmblRoomParticipantInterface {
  "Id"?: string;
  "RoomId"?: string;
  "UserId"?: string;
  "IsAdmin"?: boolean;
  Room?: AsmblRoom;
  User?: AsmblUser;
}

export class AsmblRoomParticipant implements AsmblRoomParticipantInterface {
  "Id": string;
  "RoomId": string;
  "UserId": string;
  "IsAdmin": boolean;
  Room: AsmblRoom;
  User: AsmblUser;
  constructor(data?: AsmblRoomParticipantInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsmblRoomParticipant`.
   */
  public static getModelName() {
    return "AsmblRoomParticipant";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsmblRoomParticipant for dynamic purposes.
  **/
  public static factory(data: AsmblRoomParticipantInterface): AsmblRoomParticipant{
    return new AsmblRoomParticipant(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'AsmblRoomParticipant',
      plural: 'AsmblRoomParticipants',
      path: 'AsmblRoomParticipants',
      idName: 'Id',
      properties: {
        "Id": {
          name: 'Id',
          type: 'string'
        },
        "RoomId": {
          name: 'RoomId',
          type: 'string'
        },
        "UserId": {
          name: 'UserId',
          type: 'string'
        },
        "IsAdmin": {
          name: 'IsAdmin',
          type: 'boolean'
        },
      },
      relations: {
        Room: {
          name: 'Room',
          type: 'AsmblRoom',
          model: 'AsmblRoom',
          relationType: 'belongsTo',
                  keyFrom: 'RoomId',
          keyTo: 'Id'
        },
        User: {
          name: 'User',
          type: 'AsmblUser',
          model: 'AsmblUser',
          relationType: 'belongsTo',
                  keyFrom: 'UserId',
          keyTo: 'Id'
        },
      }
    }
  }
}
