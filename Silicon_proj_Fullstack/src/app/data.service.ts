// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://jsonplaceholder.typicode.com/users';

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
}
