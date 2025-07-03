// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './teams/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private springBootUrl = 'http://localhost:8080/students';

  // Message store
  private messageMap = new Map<string, string>();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  sendMessage(team: string, message: string): void {
    this.messageMap.set(team, message);
  }

  receiveMessage(forTeam: string): string | null {
    const msg = this.messageMap.get(forTeam);
    this.messageMap.delete(forTeam); // Optional: clear message after reading
    return msg || null;
  }

  addStudent(student: Student): Observable<string> {
    return this.http.post(`${this.springBootUrl}/addStudent`, student, { responseType: 'text' });
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.springBootUrl}/getAllStudents`);
  }

    updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.springBootUrl}/updateStudent`, student);
  }

    deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.springBootUrl}/deleteStudent/${id}`);
  }
}
