import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  mobile: string;
  country: string;
  state: string;
  dob: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 formData = {
    name: '',
    email: '',
    mobile: '',
    dob: '',
    country: '',
    state: '',
    message: ''
  };
  ngOnInit() {
    // Load saved data when component initializes
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  }
  onSubmit() {
    // Save all form data to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(this.formData));
    alert('Registration saved successfully!');
  }
}
  
    