/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

}
*/


//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  Content: Content[] = [
    {
      id: 1,
      title: 'mySampleTitle1',
      description: 'This is a description1',
      creator: 'Creator1',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 2,
      title: 'mySampleTitle2',
      description: 'This is a description2',
      creator: 'Creator2',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 3,
      title: 'mySampleTitle3',
      description: 'This is a description3',
      creator: 'Creator3',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 4,
      title: 'mySampleTitle4',
      description: 'This is a description4',
      creator: 'Creator4',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 5,
      title: 'mySampleTitle5',
      description: 'This is a description5',
      creator: 'Creator5',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 6,
      title: 'mySampleTitle6',
      description: 'This is a description6',
      creator: 'Creator6',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
