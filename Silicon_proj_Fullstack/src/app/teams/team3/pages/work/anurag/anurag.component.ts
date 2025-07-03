import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Student } from 'src/app/teams/student';

@Component({
  selector: 'app-anurag',
  templateUrl: './anurag.component.html',
  styleUrls: ['./anurag.component.css']
})
export class AnuragComponent{
  student: Student = { name: '', email: '', age: 0 };
  students: Student[] = [];
  editId: number | null = null;
  editStudent = { id: 0, name: '', email: '', age: 0 };
  isLoading = false;

  constructor(private dataService: DataService) {}
  
  addStudent() {
    this.dataService.addStudent(this.student).subscribe(() => {
      this.getStudents();
      this.student = { name: '', email: '', age: 0 };
    });
  }

  getStudents() {
    this.dataService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  startEdit(student: any) {
    this.editId = student.id;
    this.editStudent = { ...student };
  }

  saveEdit() {
    this.dataService.updateStudent(this.editStudent).subscribe({
      next: () => {
        this.editId = null;
        this.getStudents(); // reload data from backend after edit
      },
      error: (err) => {
        // Optionally, show an error message to the user
        console.error('Failed to update student:', err);
      }
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.dataService.deleteStudent(id).subscribe(() => {
        this.getStudents(); // reload data from backend after delete
      });
    }
  }
}
