import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  users: any[] = [];
  dataLoaded = false;

  constructor(private dataService: DataService) {}

  loadUsers(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      this.dataLoaded = true;
    });
  }
}
