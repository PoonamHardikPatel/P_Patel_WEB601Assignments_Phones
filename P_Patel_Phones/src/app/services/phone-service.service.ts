/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor() { }
}
*/

/*
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
*/


/*
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient, private MessageService: MessageService) { }

  getPhones(): Observable<Content[]> {
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/phones");
  }

  addPhone(newPhone: Content): Observable<Content> {
    this.MessageService.add(`New Phone added`);
    return this.http.post<Content>("/api/phones", newPhone, this.httpOptions);
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
*/



import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient, private MessageService: MessageService) { }

  getPhones(): Observable<Content[]> {
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/phones");
  }

  addPhone(newPhone: Content): Observable<Content> {
    this.MessageService.add(`New Phone added`);
    return this.http.post<Content>("/api/phones", newPhone, this.httpOptions);
  }

  getPhoneById(id: number): Observable<any> {
    const phone = this.http.get<Content>(`api/phones/${id}`);

    if (phone) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return phone;
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
