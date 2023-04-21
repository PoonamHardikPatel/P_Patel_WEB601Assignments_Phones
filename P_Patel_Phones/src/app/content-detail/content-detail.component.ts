/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {

}
*/


import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { PhoneServiceService } from '../services/phone-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultPhone: string = '/assets/images/defaultPhones.jpg';

  constructor(private route: ActivatedRoute, private PhoneServiceService: PhoneServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.PhoneServiceService.getPhoneById(this.id).subscribe(phone => {
        this.content = phone;
      })
    });
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}
