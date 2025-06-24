import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor() { }

  onStartLearning() {
    // Add navigation logic or modal
    console.log('Start Learning clicked');
  }

  onViewCurriculum() {
    // Add navigation logic or modal
    console.log('View Curriculum clicked');
  }
}
