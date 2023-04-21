/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

}
*/

import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newPhone: any = {};
  @Output() addPhoneEvent = new EventEmitter<Content>();

  addNewPhone() {
    this.addPhoneEvent.emit(this.newPhone);
    this.newPhone = {};
  }
}
