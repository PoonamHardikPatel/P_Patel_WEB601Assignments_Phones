/*
import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P_Patel_Phones';
  contentArray: Content[] = [];
}
*/


import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { PhoneServiceService } from './services/phone-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P_Patel_Phones';
  phoneId: number = 4;
  onePhoneById: any = {};

  constructor(private PhoneServiceService: PhoneServiceService) { }

  ngOnInit() {
    this.findPhoneById();
  }

  findPhoneById() {
    this.PhoneServiceService.getPhoneById(this.phoneId).subscribe(result => {
      if (typeof result === "object") {
        this.onePhoneById = result;
      }
    });
  }
}
