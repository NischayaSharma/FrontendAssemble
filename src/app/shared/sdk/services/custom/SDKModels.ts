/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { AsmblUser } from '../../models/AsmblUser';
import { AsmblGroup } from '../../models/AsmblGroup';
import { AsmblRoom } from '../../models/AsmblRoom';
import { AsmblActivity } from '../../models/AsmblActivity';
import { AsmblRoomParticipant } from '../../models/AsmblRoomParticipant';
import { AsmblGroupParticipant } from '../../models/AsmblGroupParticipant';
import { Sequence } from '../../models/Sequence';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    AsmblUser: AsmblUser,
    AsmblGroup: AsmblGroup,
    AsmblRoom: AsmblRoom,
    AsmblActivity: AsmblActivity,
    AsmblRoomParticipant: AsmblRoomParticipant,
    AsmblGroupParticipant: AsmblGroupParticipant,
    Sequence: Sequence,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
