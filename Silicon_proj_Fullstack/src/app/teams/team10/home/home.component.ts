import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { GitHubService } from '../github.service';
interface CommitInfo {
  message: string;
  date: string;
}

interface Member {
  name: string;
  username: string;
  img: string;
  github: string;
  key: string;
  status: string;
  rating: number;
  contribution: number;
  commits: CommitInfo[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
[x: string]: any;
  selected: string | null = null;
  fadingOut: string | null = null;
  timeoutId: any = null;

  port: string = window.location.port;
  hostname: string = window.location.hostname;
  contactUrl: string = `http://${this.hostname}:${this.port}/team10/contact`;

  members = [
    {
      name: 'Pratyush',
      img: '../../../../assets/team10/assets/Member1.jpg',
      github: 'https://github.com/pratyushkumar-04',
      key: 'pratyush',
      username: 'pratyushkumar-04',
    },
    {
      name: 'Aditya',
      img: '../../../../assets/team10/assets/Screenshot183431.png',
      github: 'https://github.com/Adityasharma0709',
      key: 'aditya',
      username: 'Adityasharma0709',
    },
    {
      name: 'Trisha',
      img: '../../../../assets/team10/assets/Member3.jpg',
      github: 'https://github.com/Trisha123',
      key: 'trisha',
      username: 'Trisha123',
    },
    {
      name: 'P.Priyadrashi',
      img: '../../../../assets/team10/assets/Screenshot2025.png',
      github: 'https://github.com/pratyush2004-vamp',
      key: 'priyadrashi',
      username: 'pratyush2004-vamp',
    },
    {
      name: 'Swetalina',
      img: '../../../../assets/team10/assets/Member4.jpg',
      github: 'https://github.com/Swetalina-cyber',
      key: 'swetalina',
      username: 'Swetalina-cyber',
    },
    {
      name: 'Arjun',
      img: '../../../../assets/team10/assets/Member6.jpg',
      github: 'https://github.com/ArjuMallick',
      key: 'Arjun',
      username: 'ArjuMallick',
    },
    {
      name: 'Anindita',
      img: '../../../../assets/team10/assets/Member5.jpg',
      github: 'https://github.com/aninditaparida',
      key: 'Anindita',
      username: 'aninditaparida',
    },
  ];
  commits: any[] = [];
  hoveredCommitKey: string | null = null;
  hoveredUser: any = null;

  constructor(private http: HttpClient, private githubService: GitHubService) {}

  fetchUser(username: string, commitKey: string) {
    this.hoveredCommitKey = commitKey;
    this.http
      .get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${environment.githubToken}`,
        },
      })
      .subscribe({
        next: (user) => {
          // only assign if still hovering that commit
          if (this.hoveredCommitKey === commitKey) {
            this.hoveredUser = user;
          }
        },
        error: () => {
          this.hoveredUser = null;
        },
      });
  }
  totalCommits: number = 0;
  filteredCommits: { message: string; username: string; sha: string }[] = [];


  ngOnInit(): void {
    this.githubService.getBranchCommits().subscribe({
      next: (commits) => {
        if (commits && Array.isArray(commits)) {
          // first, get all usernames you want
          const allowedUsernames = this.members.map((m) =>
            m.username.toLowerCase()
          );

          // filter out only commits done by team members
          this.filteredCommits = commits
            .filter(
              (commit) =>
                commit.author &&
                allowedUsernames.includes(commit.author.login.toLowerCase())
            )
            .map((commit) => ({
              message: commit.commit.message,
              username: commit.author.login,
              sha: commit.sha.slice(0, 7),
            }));

          this.totalCommits = this.filteredCommits.length;

          console.log(this.filteredCommits);
        } else {
          console.warn('No commits found in team10');
        }
      },
      error: (err) => {
        console.error('Failed to fetch commits:', err);
      },
    });
  }
hoveredCommitFilesKey: string | null = null;
hoveredCommitFiles: { filename: string; additions: number; deletions: number }[] | null = null;

fetchCommitFiles(sha: string) {
  this.hoveredCommitFilesKey = sha;
  this.githubService.getCommitDetails(sha).subscribe({
    next: (commitDetail) => {
      this.hoveredCommitFiles = commitDetail.files.map((f: { filename: any; additions: any; deletions: any; }) => ({
        filename: f.filename,
        additions: f.additions,
        deletions: f.deletions
      }));
    },
    error: (err) => {
      console.error(`Failed to fetch files for commit ${sha}`, err);
    }
  });
}


  showGitHub(key: string) {
    this.selected = key;
    this.fadingOut = null;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.fadingOut = key;

      setTimeout(() => {
        this.selected = null;
        this.fadingOut = null;
        this.timeoutId = null;
      }, 500); // Delay for fade-out duration
    }, 1500); // Microcard shown for 3 seconds
  }
}
