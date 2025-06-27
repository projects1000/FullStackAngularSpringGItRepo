// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  teamLead = {
    name: 'Arpita Patnaik',
    email: 'lead@example.com',
    phone: '9876543210'
  };

  members = [
    { name: 'Ipsita Priyadarsini Mishra', email: 'ipsita@example.com', phone: '9876543211' },
    { name: 'Sajeya Quadri', email: 'sajeya@example.com', phone: '9876543212' },
    { name: 'Jyoti Karmakar', email: 'jyoti@example.com', phone: '9876543213' },
    { name: 'Shobha Mahato', email: 'shobha@example.com', phone: '9876543214' },
    { name: 'Soma Tiwary', email: 'soma@example.com', phone: '9876543215' },
    { name: 'Akanksha Panda', email: 'akanksha@example.com', phone: '9876543216' }
  ];

  newMember = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  messages: string[] = []; // optional if you want to store messages

  onSubmit() {
    // push only name, email, phone to members
    this.members.push({
      name: this.newMember.name,
      email: this.newMember.email,
      phone: this.newMember.phone
    });

    // optional: store messages separately
    this.messages.push(this.newMember.message);

    // alert(Thank you, ${this.newMember.name}. Your onmessage has been recorded.);
    alert(`Thank you, ${this.newMember.name}. Your message has been recorded.`);
    this.newMember = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
