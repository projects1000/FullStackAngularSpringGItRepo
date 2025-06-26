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
  headingText = 'Contact Us';
  isSubmitting = false;
  messageSent = false;
  showError = false;
  showNameError = false;
  showEmailError = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  validateName(name: string): boolean {
    return /^[a-zA-Z\s]+$/.test(name.trim());
  }

  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  onSubmit(form: any) {
  this.showError = false;
  this.showNameError = false;
  this.showEmailError = false;

  const { name, email, message } = this.formData;

  if (!name || !email || !message) {
    this.showError = true;
    setTimeout(() => this.showError = false, 4000);
    return;
  }

  let hasError = false;

  if (!this.validateName(name)) {
    this.showNameError = true;
    hasError = true;
    setTimeout(() => this.showNameError = false, 4000);
  }

  if (!this.validateEmail(email)) {
    this.showEmailError = true;
    hasError = true;
    setTimeout(() => this.showEmailError = false, 4000);
  }

  if (hasError) return;

  this.isSubmitting = true;

  setTimeout(() => {
    this.messageSent = true;
    this.isSubmitting = false;
    this.formData = { name: '', email: '', message: '' };
    form.reset();
    setTimeout(() => this.messageSent = false, 4000);
  }, 1500);
}
}
