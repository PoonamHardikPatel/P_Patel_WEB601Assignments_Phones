/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {

}
*/

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  newPhone: any = {};

  constructor(public dialogRef: MatDialogRef<AddContentDialogComponent>) { }
  addNewPhone() {
    this.newPhone = {};
  }
}
