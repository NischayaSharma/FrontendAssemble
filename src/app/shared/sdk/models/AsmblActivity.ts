/* tslint:disable */

declare var Object: any;
export interface AsmblActivityInterface {
  "Id"?: string;
  "Name"?: string;
  "RoomId"?: string;
}

export class AsmblActivity implements AsmblActivityInterface {
  "Id": string;
  "Name": string;
  "RoomId": string;
  constructor(data?: AsmblActivityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsmblActivity`.
   */
  public static getModelName() {
    return "AsmblActivity";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsmblActivity for dynamic purposes.
  **/
  public static factory(data: AsmblActivityInterface): AsmblActivity{
    return new AsmblActivity(data);
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
      name: 'AsmblActivity',
      plural: 'AsmblActivities',
      path: 'AsmblActivities',
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
        "RoomId": {
          name: 'RoomId',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
