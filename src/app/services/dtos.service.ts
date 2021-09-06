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
