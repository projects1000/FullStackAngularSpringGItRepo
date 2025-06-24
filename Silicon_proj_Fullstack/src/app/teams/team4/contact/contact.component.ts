import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',]
})
export class ContactComponent {
  submitted = false;

  // Optional: you can collect form data like this
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Extract and save form data
      this.formData = { ...form.value };

      this.submitted = true;
      console.log('Form Submitted Successfully:', this.formData);

      // Optionally reset the form
      form.resetForm();
    } else {
      this.submitted = false;
      console.warn('Form is invalid. Please fill all required fields.');
    }
  }
}