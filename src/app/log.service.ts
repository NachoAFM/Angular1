import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  messages: string[] = [];
 
  addLog(message: string) {
    console.log(message);
  }
 
  clear() {
    this.messages = [];
  }
}
