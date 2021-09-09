/* tslint:disable */
import {
  AsmblGroup,
  AsmblUser
} from '../index';

declare var Object: any;
export interface AsmblGroupParticipantInterface {
  "Id"?: string;
  "GroupId"?: string;
  "UserId"?: string;
  "IsAdmin"?: boolean;
  Group?: AsmblGroup;
  User?: AsmblUser;
}

export class AsmblGroupParticipant implements AsmblGroupParticipantInterface {
  "Id": string;
  "GroupId": string;
  "UserId": string;
  "IsAdmin": boolean;
  Group: AsmblGroup;
  User: AsmblUser;
  constructor(data?: AsmblGroupParticipantInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsmblGroupParticipant`.
   */
  public static getModelName() {
    return "AsmblGroupParticipant";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsmblGroupParticipant for dynamic purposes.
  **/
  public static factory(data: AsmblGroupParticipantInterface): AsmblGroupParticipant{
    return new AsmblGroupParticipant(data);
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
      name: 'AsmblGroupParticipant',
      plural: 'AsmblGroupParticipants',
      path: 'AsmblGroupParticipants',
      idName: 'Id',
      properties: {
        "Id": {
          name: 'Id',
          type: 'string'
        },
        "GroupId": {
          name: 'GroupId',
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
        Group: {
          name: 'Group',
          type: 'AsmblGroup',
          model: 'AsmblGroup',
          relationType: 'belongsTo',
                  keyFrom: 'GroupId',
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
