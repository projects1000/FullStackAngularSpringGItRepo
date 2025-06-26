import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  constructor( private router: Router,private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  username = '';
  password = '';
  message = '';

  checkLogin() {
    // Check for empty fields first
    if (!this.username || !this.password) {
      this.message = '⚠️ Please fill in both username and password.';
      return;
    }

    const users = [
      { username: 'Mukund', password: 'Mukund123' },
      { username: 'Abhay', password: 'Abhay456' },
      { username: 'User', password: 'User123' }
    ];

    const valid = users.find(
      u => u.username === this.username && u.password === this.password
    );

    if (valid) {
      this.message = 'Login Successful';
     
    } else {
      this.message = '❌ Invalid username or password.';
    }
  }

}