import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Student, StudentService } from '../student.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  users: any[] = [];

  students: Student[] = [];
  newStudent: Student = { name: '', age: 0, email: '' };

  constructor(
    private studentService: StudentService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getStudents();

    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(response => {
      alert(response);
      this.getStudents(); // Refresh list
    });
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  ngAfterViewInit() {
    const text = 'Team 3: Builders of Tomorrow 🚀';
    const target = document.querySelector('.typewriter') as HTMLElement;
    let index = 0;

    if (target) {
      const interval = setInterval(() => {
        target.textContent += text.charAt(index);
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 80);
    }
  }
}
