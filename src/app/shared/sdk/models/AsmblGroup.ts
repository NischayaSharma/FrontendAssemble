/* tslint:disable */

declare var Object: any;
export interface AsmblGroupInterface {
  "Id"?: string;
  "Name"?: string;
  "Description"?: string;
}

export class AsmblGroup implements AsmblGroupInterface {
  "Id": string;
  "Name": string;
  "Description": string;
  constructor(data?: AsmblGroupInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsmblGroup`.
   */
  public static getModelName() {
    return "AsmblGroup";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsmblGroup for dynamic purposes.
  **/
  public static factory(data: AsmblGroupInterface): AsmblGroup{
    return new AsmblGroup(data);
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
      name: 'AsmblGroup',
      plural: 'AsmblGroups',
      path: 'AsmblGroups',
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
        "Description": {
          name: 'Description',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
