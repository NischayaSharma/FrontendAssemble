/* tslint:disable */

declare var Object: any;
export interface AsmblUserInterface {
  "DeviceId"?: string;
  "Username"?: string;
  "Id"?: string;
}

export class AsmblUser implements AsmblUserInterface {
  "DeviceId": string;
  "Username": string;
  "Id": string;
  constructor(data?: AsmblUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsmblUser`.
   */
  public static getModelName() {
    return "AsmblUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsmblUser for dynamic purposes.
  **/
  public static factory(data: AsmblUserInterface): AsmblUser{
    return new AsmblUser(data);
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
      name: 'AsmblUser',
      plural: 'AsmbleUsers',
      path: 'AsmbleUsers',
      idName: 'Id',
      properties: {
        "DeviceId": {
          name: 'DeviceId',
          type: 'string'
        },
        "Username": {
          name: 'Username',
          type: 'string'
        },
        "Id": {
          name: 'Id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
