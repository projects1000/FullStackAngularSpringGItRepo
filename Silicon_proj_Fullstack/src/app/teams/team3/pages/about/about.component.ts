import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    { name: 'Anurag Pradhan', role: 'Team Leader', image: 'assets/team3-gallery/Anurag.jpg' },
    { name: 'Abhisek Panda', role: 'QA Automation Tester', image: 'assets/team3-gallery/Abhisek.jpg' },
    { name: 'Akash Meher', role: 'Accessibility Lead', image: 'assets/team3-gallery/Akash.jpg' },
    { name: 'Aswini Kumar Moharana', role: 'Form Validation Developer', image: 'assets/team3-gallery/Aswini.jpg' },
    { name: 'Digdarshan Mohanty', role: 'UI & SCSS Developer', image: 'assets/team3-gallery/Digdarshan.jpg' },
    { name: 'Khushi Singh', role: 'UI component Developer', image: 'assets/team3-gallery/Khushi.jpg' },
    { name: 'Shruti Sudha Padhy', role: 'Frontend Developer', image: 'assets/team3-gallery/Shruti.jpg' },
    { name: 'Kirtidaya Sahu', role: 'Component Developer', image: 'assets/team3-gallery/Kritidaya.jpg' }
  ];
}
