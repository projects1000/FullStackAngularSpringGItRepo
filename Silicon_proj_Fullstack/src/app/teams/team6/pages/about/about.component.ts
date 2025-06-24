import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Angular frontend and Spring Boot backend",
      tech: ["Angular 15", "Spring Boot", "MySQL", "JWT Auth"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Integration"]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Angular", "Spring Boot", "WebSocket", "PostgreSQL"],
      features: ["Real-time Collaboration", "Task Tracking", "Team Management", "Notifications"]
    },
    {
      title: "Student Portal",
      description: "Educational platform for course management and student tracking",
      tech: ["Angular", "Spring Boot", "MongoDB", "Redis"],
      features: ["Course Management", "Grade Tracking", "Attendance System", "Communication Hub"]
    }
  ];

  constructor() { }
}
