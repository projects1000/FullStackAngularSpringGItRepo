import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    phone: '',
    email: '',
    query: ''
  };
  submitted = false;


  submitquery() {
    if (this.contact.name && this.contact.phone && this.contact.email && this.contact.query) {
      this.submitted = true;
    }
     this.contact = {
        name: '',
        phone: '',
        email: '',
        query: ''
      };
  }
}