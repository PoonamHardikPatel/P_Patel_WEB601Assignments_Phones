import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { PhoneServiceService } from '../services/phone-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultPhone: string = '/assets/images/defaultPhones.jpg';


  constructor(private PhoneServiceService: PhoneServiceService) {

  }

  ngOnInit() {
    this.PhoneServiceService.getPhones().subscribe(phones => this.contents = phones);
  }

  addNewPhone(newPhone: Content) {
    this.PhoneServiceService.addPhone(newPhone).subscribe(newPhoneFromServer => {
      this.contents.push(newPhoneFromServer);
      this.contents = [...this.contents];
    });
  }


  searchByTitle() {
    const matchingPhone = this.contents.find(phone => phone.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`.card`);

    if (matchingPhone) {
      this.titleFound = true;

      cardElements.forEach(card => {
        if (parseInt(card.id) === matchingPhone.id) {
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }

}
