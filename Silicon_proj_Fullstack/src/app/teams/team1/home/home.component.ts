import { Component } from '@angular/core';
import { Student, StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  students: Student[] = [];
  newStudent: Student = { name: '', age: 0, email: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
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
}
