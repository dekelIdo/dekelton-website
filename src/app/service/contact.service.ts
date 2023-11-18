
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private isContactRequestReceived = new BehaviorSubject<boolean>(false);
  isContactRequestReceived$ = this.isContactRequestReceived.asObservable();

  constructor() {}

  sentContact(contact: Contact):void {
    if(contact){
      setTimeout(() => {
        this.isContactRequestReceived.next(true);
      },2500)
    }
  }
}
