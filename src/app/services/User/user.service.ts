import { Injectable } from '@angular/core';
import { AsmblUserApi, AsmblUserInterface } from 'src/app/shared/sdk';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private userApi: AsmblUserApi,
  ) { }

  private currentUser: AsmblUserInterface;

  async deviceIdExists(deviceId: string): Promise<any> {
    return await this.userApi.count({ DeviceId: deviceId }).toPromise()
      .then(result => {
        if (result.count > 0) {
          return { success: true, data: { exists: true }, message: 'Device Id Exists' };
        } else {
          return { success: true, data: { exists: false }, message: 'Device ID not found' };
        }
      }).catch(err => {
        return { success: false, data: { exists: false }, message: err };
      });
  }

  async usernameExists(username: string): Promise<any> {
    return await this.userApi.count({ where: { Username: username } }).toPromise()
      .then(result => {
        if (result.count > 0) {
          return { success: true, data: { exists: true }, message: 'User Exists' };
        } else {
          return { success: true, data: { exists: false }, message: 'User not found' };
        }
      }).catch(err => {
        return { success: false, data: { exists: false }, message: err };
      });
  }

  async createUser(deviceId: string, username: string): Promise<any> {
    var deviceIdExists = await this.deviceIdExists(deviceId);
    if (!deviceIdExists.data.exists) {
      return await this.userApi.create<AsmblUserInterface>({ DeviceId: deviceId, Username: username.toLowerCase() }).toPromise()
        .then(result => {
          return { success: true, data: result, message: 'User created.' };
        }).catch(err => {
          return { success: false, data: err, message: 'Error in Creating User.' };
        });
    } else {
      return { success: false, data: deviceIdExists, message: "Device Already Registered" };
    }
  }

  async getUserByDeviceId(deviceId: string): Promise<any> {
    return await this.userApi.findOne<AsmblUserInterface>({ where: { DeviceId: deviceId } }).toPromise()
      .then(result => {
        return { success: true, data: result, message: 'User found.' };
      }).catch(err => {
        return { success: false, data: err, message: 'Error in finding User.' };
      });
  }

  async getUserByUsername(username: string): Promise<any> {
    return await this.userApi.findOne<AsmblUserInterface>({ where: { Username: { like: username } } }).toPromise()
      .then(result => {
        return { success: true, data: result, message: 'User found.' };
      }).catch(err => {
        return { success: false, data: err, message: 'Error in finding User.' };
      });
  }

  async getAllUsers(): Promise<any> {
    return await this.userApi.find<AsmblUserInterface>({}).toPromise()
      .then(result => {
        return { success: true, data: result, message: 'Users found.' };
      }).catch(err => {
        return { success: false, data: err, message: 'Error in finding Users.' };
      });
  }

  async setUser(deviceId: string): Promise<any> {
    var user = await this.getUserByDeviceId(deviceId);
    if (user.success) {
      this.currentUser = user.data;
      return { success: true, data: this.currentUser, message: 'User set' };
    }
  }




  public get $currentUser(): AsmblUserInterface {
    return this.currentUser;
  }

  public set $currentUser(value: AsmblUserInterface) {
    this.currentUser = value;
  }

}
