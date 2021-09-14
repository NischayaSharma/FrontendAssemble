import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DtosService {

  constructor() { }
}

export interface Groups {
  id: string,
  title: string,
  subtitle: string,
}

export interface Rooms {
  id: string,
  title: string,
}

export interface Activities {
  id: string,
  title: string,
}

export interface ApiReturns<T> {
  success: boolean,
  data: any | T,
  message: string
}

/* 
Users
Groups:
  id: string
  title: string
  subtitle: string

Rooms:
  id: string
  title: string
  GroupId: string

Activities:
  id: string
  title: string
  RoomId: string


RoomParticipants:
  id: string
  RoomId: string
  UserId: string
  IsAdmin: boolean

GroupParticipants:
  id: string
  GroupId: string
  UserId: string
  IsAdmin: boolean
*/