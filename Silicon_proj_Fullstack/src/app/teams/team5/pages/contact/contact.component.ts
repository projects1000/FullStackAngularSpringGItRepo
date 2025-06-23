  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  @Component({
    standalone: true,
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    imports: [CommonModule, FormsModule]
  })
  export class ContactComponent {
    messageSent = false;
    showError = false;
    isSubmitting = false;
    headingText = 'Contact Us';


    onSubmit(form: any) {
    if (!form.valid) {
      this.showError = true;
      this.messageSent = false;
      setTimeout(() => this.showError = false, 4000);
      return;
    }

    this.isSubmitting = true;
    this.showError = false;

    setTimeout(() => {
      this.messageSent = true;
      this.isSubmitting = false;
      form.reset();
      setTimeout(() => this.messageSent = false, 4000);
    }, 1500); // Simulate delay for submission
  }
  }
