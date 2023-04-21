/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor() { }
}
*/


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor(private MessageService: MessageService) { }

  getPhones(): Observable<Content[]> {
    const phones = contents;
    this.MessageService.add("Content array loaded!");
    return of(phones);
  }

  getPhoneById(id: number): Observable<any> {
    const phone = contents.find(content => content.id === id);

    if (phone) {
      this.MessageService.add(`Content Item at ID: ${id}`);
      return of(phone);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
