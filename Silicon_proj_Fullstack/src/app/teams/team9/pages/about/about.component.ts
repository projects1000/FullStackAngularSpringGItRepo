import { Component, OnInit } from '@angular/core';

interface TechItem {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers: string[] = [
    'Manish Sharma',
    'Bhabani Sankar Nanda',
    'Sudhakar Reddy',
    'Ajay Kumar Sahoo',
    'Siba Sankar Dash',
    'Vijay Karjee'
  ];

  techStack: TechItem[] = [
    {
      name: 'Angular',
      icon: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'A powerful front-end framework for building SPAs with dynamic UI.'
    },
    {
      name: 'Spring Boot',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
      description: 'Simplifies Java backend development, database handling, and APIs.'
    },
    {
      name: 'MySQL',
      icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
      description: 'A reliable RDBMS for storing and managing structured data efficiently.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
