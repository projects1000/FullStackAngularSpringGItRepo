import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  countries = [
    { name: 'India', code: '+91' },
    { name: 'USA', code: '+1' },
    { name: 'UK', code: '+44' },
    { name: 'Australia', code: '+61' }
  ];
  countryCode = '';
  states = ['Odisha', 'Maharashtra', 'Karnataka', 'California', 'Texas'];
  submitted = false;
  message = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      country: ['India', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(10),
        Validators.maxLength(15)
      ]],
      state: ['', Validators.required],
      dob: ['', Validators.required],
      message: ['', Validators.required]
    });

    // Set initial country code
    const defaultCountry = this.countries.find(c => c.name === 'India');
    this.countryCode = defaultCountry ? defaultCountry.code : '';
  }

  onCountryChange(event: any) {
    const selected = this.countries.find(c => c.name === event.target.value);
    this.countryCode = selected ? selected.code : '';
    this.contactForm.get('mobile')?.reset();
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
  const formData = this.contactForm.value;
  this.message = `Team3 - Name: ${formData.name}, Country: ${formData.country}, Email: ${formData.email}, Mobile: ${this.countryCode}${formData.mobile}, State: ${formData.state}, DOB: ${formData.dob}, Message: ${formData.message}`;
  
  alert('Success! Your message has been submitted.\n\n' + this.message);
  
  this.contactForm.reset();
  this.submitted = false;
  this.countryCode = '+91';

  // Hide message after 5 seconds
  setTimeout(() => {
    this.message = '';
  }, 5000);
}
 else {
      this.message = 'Please fill all fields correctly before submitting.';
    }
  }
}
