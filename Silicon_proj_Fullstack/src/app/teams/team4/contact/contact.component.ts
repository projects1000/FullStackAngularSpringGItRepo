import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',]
})
export class ContactComponent {
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      this.submitted = true;
      form.resetForm();
    }
  }
}
