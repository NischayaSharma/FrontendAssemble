/* tslint:disable */
import {
  AsmblGroup
} from '../index';

declare var Object: any;
export interface AsmblRoomInterface {
  "Id"?: string;
  "Name"?: string;
  "GroupId"?: string;
  Group?: AsmblGroup;
}

export class AsmblRoom implements AsmblRoomInterface {
  "Id": string;
  "Name": string;
  "GroupId": string;
  Group: AsmblGroup;
  constructor(data?: AsmblRoomInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsmblRoom`.
   */
  public static getModelName() {
    return "AsmblRoom";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsmblRoom for dynamic purposes.
  **/
  public static factory(data: AsmblRoomInterface): AsmblRoom{
    return new AsmblRoom(data);
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
      name: 'AsmblRoom',
      plural: 'AsmblRooms',
      path: 'AsmblRooms',
      idName: 'Id',
      properties: {
        "Id": {
          name: 'Id',
          type: 'string'
        },
        "Name": {
          name: 'Name',
          type: 'string'
        },
        "GroupId": {
          name: 'GroupId',
          type: 'string'
        },
      },
      relations: {
        Group: {
          name: 'Group',
          type: 'AsmblGroup',
          model: 'AsmblGroup',
          relationType: 'belongsTo',
                  keyFrom: 'GroupId',
          keyTo: 'Id'
        },
      }
    }
  }
}
