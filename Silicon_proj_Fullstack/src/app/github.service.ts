import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({ providedIn: 'root' })
export class GitHubService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getBranchCommits(): Observable<any[]> {
    const url = `https://api.github.com/repos/projects1000/FullStackAngularSpringGItRepo/commits?sha=team10&per_page=100`;
   return this.http.get<any[]>(url).pipe(
    catchError((error) => {
      if (error.status === 403 && error.error?.message?.includes('API rate limit exceeded')) {
        this.snackBar.open("GitHub rate limit exceeded. Please wait or use a token.", "OK", {
          duration: 5000,
        });
      }
      throw error;
    })
  );
}
  getCommitDetails(sha: string): Observable<any> {
    const url = `https://api.github.com/repos/projects1000/FullStackAngularSpringGItRepo/commits/${sha}`;
    return this.http.get<any>(url); // no token
  }

  getUserDetails(username: string): Observable<any> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get<any>(url); // no token
  }
}

