import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
filteredCommits: { message: string; username: string; sha: string }[] = [];
totalCommits: number = 0;
 hoveredUser: any = null;
hoveredCommitKey: string | null = null;


  constructor(private http: HttpClient,private githubService: GitHubService) {}
isLoading: boolean = true;

ngOnInit(): void {
  this.githubService.getBranchCommits().subscribe({
    next: (commits) => {
      if (commits && Array.isArray(commits)) {
        // first, get all usernames you want
        const allowedUsernames = this.members.map(m => m.username.toLowerCase());

        // filter out only commits done by team members
        this.filteredCommits = commits
          .filter(commit =>
            commit.author && allowedUsernames.includes(commit.author.login.toLowerCase())
          )
          .map(commit => ({
            message: commit.commit.message,
            username: commit.author.login,
            sha: commit.sha.slice(0, 7)
          }));

        this.totalCommits = this.filteredCommits.length;

       
      } else {
        console.warn('No commits found in team10');
      }
       this.isLoading = false;
    },
    error: (err) => {
      console.error('Failed to fetch commits:', err);
       this.isLoading = false;
    }
  });
  
}
fetchUser(username: string, sha: string) {
  this.hoveredCommitKey = sha;
  this.githubService.getUserDetails(username).subscribe({
    next: (user) => {
      this.hoveredUser = user;
    },
    error: (err) => {
      console.error(`Error fetching user ${username}:`, err);
      this.hoveredUser = null;
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

