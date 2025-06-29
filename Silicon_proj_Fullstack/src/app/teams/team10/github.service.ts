import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
@Injectable({ providedIn: 'root' })
export class GitHubService {
  constructor(private http: HttpClient) {}
getBranchCommits(): Observable<any[]> {
  const url = `https://api.github.com/repos/projects1000/FullStackAngularSpringGItRepo/commits?sha=team10&per_page=100`;

  const headers = new HttpHeaders({
    Authorization: `Bearer ${environment.githubToken}`
  });

  return this.http.get<any[]>(url, { headers });
}

getCommitDetails(sha: string): Observable<any> {
  const url = `https://api.github.com/repos/projects1000/FullStackAngularSpringGItRepo/commits/${sha}`;

  const headers = new HttpHeaders({
    Authorization: `Bearer ${environment.githubToken}`
  });

  return this.http.get<any>(url, { headers });
}

}

