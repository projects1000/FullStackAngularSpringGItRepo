import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginData = { username: '', password: '' };
  loginError: string | null = null;
  loginSuccess = false;
  users: any[] = [];
  isLoading = false;

  features = [
    { icon: 'assets/angular.png', title: 'Dynamic UI', description: 'Responsive and interactive user interfaces using Angular.' },
    { icon: 'assets/springboot.png', title: 'REST APIs', description: 'Robust backend APIs built with Spring Boot.' },
    { icon: 'assets/integration.png', title: 'Integration', description: 'Seamlessly connect frontend & backend.' },
    { icon: 'assets/deployment.png', title: 'Cloud Deployment', description: 'Deploy on AWS, Heroku & more.' },
    { icon: 'assets/testing.png', title: 'Unit Testing', description: 'Write and run tests for reliability.' },
    { icon: 'assets/security.png', title: 'Security', description: 'Protect apps with best practices.' },
    { icon: 'assets/performance.png', title: 'Optimization', description: 'Fast loading and scalable apps.' },
    { icon: 'assets/devops.png', title: 'DevOps', description: 'CI/CD and automation for teams.' }
  ];

  constructor(private http: HttpClient) {}

  login() {
    this.loginError = null;
    this.loginSuccess = false;

    // Replace with your real Spring Boot login endpoint
    this.http.post<any>('http://localhost:8080/api/login', this.loginData)
      .subscribe({
        next: res => {
          console.log('Login successful');
          this.loginSuccess = true;
          this.loadUsers();
        },
        error: err => {
          console.error('Login failed', err);
          this.loginError = 'Invalid username or password';
        }
      });
  }

  loadUsers() {
    this.isLoading = true;
    // Replace with your real cloud JSON API endpoint
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: data => {
          this.users = data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }
}
