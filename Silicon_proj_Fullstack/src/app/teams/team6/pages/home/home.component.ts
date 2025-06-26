import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 users: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  onStartLearning() {
    // Add navigation logic or modal
    console.log('Start Learning clicked');
  }

  onViewCurriculum() {
    // Add navigation logic or modal
    console.log('View Curriculum clicked');
  }
}
