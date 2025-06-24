import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username = '';
  password = '';
  message = '';

  constructor(private router: Router) {}

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