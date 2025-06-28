import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  appointmentForm: FormGroup;
  submitted = false;
  submittedAppointment = false;
  message = '';
  appointmentMessage = '';
  countryCode = '';
  activeFaqIndex: number | null = null;

  countries = [
    { name: 'India', code: '+91' },
    { name: 'USA', code: '+1' },
    { name: 'UK', code: '+44' },
    { name: 'Australia', code: '+61' }
  ];

  states = ['Odisha', 'Maharashtra', 'Karnataka', 'California', 'Texas'];

  stats = [
    { number: '7500+', label: 'Students' },
    { number: '250+', label: 'Faculty' },
    { number: '65+', label: 'Programs' },
    { number: '100+', label: 'Recruiters' }
  ];

  faqs = [
    {
      question: 'How can I apply for admission?',
      answer: 'You can apply directly through our official website under the Admissions section.'
    },
    {
      question: 'What programs are offered?',
      answer: 'We offer undergraduate, postgraduate, and doctoral programs in Engineering, Science, and Management.'
    },
    {
      question: 'Where is the campus located?',
      answer: 'The campus is located in Patia, Bhubaneswar, Odisha - 751024.'
    },
    {
      question: 'Does the university offer hostel facilities?',
      answer: 'Yes, we provide well-furnished hostels for both boys and girls with all amenities.'
    }
  ];

  constructor(private fb: FormBuilder) {
    const defaultCountry = this.countries.find(c => c.name === 'India');
    this.countryCode = defaultCountry ? defaultCountry.code : '';

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      country: ['India', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      state: ['', Validators.required],
      dob: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.appointmentForm = this.fb.group({
      visitDate: ['', Validators.required],
      visitReason: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
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

      setTimeout(() => {
        this.message = '';
      }, 1000);
    } else {
      this.message = 'Please fill all fields correctly before submitting.';
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.submitted = false;
    this.countryCode = '+91';
    this.message = '';
  }

  saveDraft() {
    const draftData = this.contactForm.value;
    localStorage.setItem('contactDraft', JSON.stringify(draftData));
    alert('Draft saved successfully!');
  }

  toggleFAQ(index: number) {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  onBookVisit() {
    this.submittedAppointment = true;

    if (this.appointmentForm.valid) {
      const { visitDate, visitReason } = this.appointmentForm.value;
      this.appointmentMessage = `Your visit has been scheduled on ${visitDate}. Reason: ${visitReason}`;

      this.appointmentForm.reset();
      this.submittedAppointment = false;

      setTimeout(() => {
        this.appointmentMessage = '';
      }, 4000);
    } else {
      this.appointmentMessage = 'Please select a date and provide a reason for your visit.';
    }

  }
  resetAppointmentForm() {
  this.appointmentForm.reset();
  this.submittedAppointment = false;
  this.appointmentMessage = '';
}
}
