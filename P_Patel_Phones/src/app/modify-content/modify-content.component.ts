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


/*
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
*/


import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newPhone: any = {};
  @Output() addPhoneEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newPhoneFromDialog => {
      if (newPhoneFromDialog) {
        if (newPhoneFromDialog.title && newPhoneFromDialog.description && newPhoneFromDialog.creator) {
          this.newPhone = newPhoneFromDialog;
          this.addNewPhone();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }
  addNewPhone() {
    this.addPhoneEvent.emit(this.newPhone);
    this.newPhone = {};
  }
}
