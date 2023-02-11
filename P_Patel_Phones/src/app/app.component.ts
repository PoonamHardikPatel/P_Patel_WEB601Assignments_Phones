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
/*
export class ContentListComponent {
  contentArray: any[] = [];
}
*/
