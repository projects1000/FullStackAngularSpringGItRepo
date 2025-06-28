import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Student {
  id?: number;
  name: string;
  age: number;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) {}

  // Add new student
  addStudent(student: Student): Observable<string> {
    return this.http.post(this.baseUrl + '/add', student, { responseType: 'text' });
  }

  // Get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + '/all');
  }
}
