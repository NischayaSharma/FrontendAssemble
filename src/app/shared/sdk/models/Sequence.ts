/* tslint:disable */

declare var Object: any;
export interface SequenceInterface {
  "ModelName": string;
  "Sequence"?: number;
  "IdPrefix"?: string;
  "IdLen"?: number;
  "id"?: any;
}

export class Sequence implements SequenceInterface {
  "ModelName": string;
  "Sequence": number;
  "IdPrefix": string;
  "IdLen": number;
  "id": any;
  constructor(data?: SequenceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Sequence`.
   */
  public static getModelName() {
    return "Sequence";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Sequence for dynamic purposes.
  **/
  public static factory(data: SequenceInterface): Sequence{
    return new Sequence(data);
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
      name: 'Sequence',
      plural: 'Sequences',
      path: 'Sequences',
      idName: 'id',
      properties: {
        "ModelName": {
          name: 'ModelName',
          type: 'string'
        },
        "Sequence": {
          name: 'Sequence',
          type: 'number'
        },
        "IdPrefix": {
          name: 'IdPrefix',
          type: 'string'
        },
        "IdLen": {
          name: 'IdLen',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
