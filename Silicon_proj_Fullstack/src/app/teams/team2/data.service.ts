import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private url = 'https://jsonplaceholder.typicode.com/posts'; // ✅ Cloud JSON

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }
}
