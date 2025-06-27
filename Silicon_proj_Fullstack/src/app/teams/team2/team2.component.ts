import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.scss']
})
export class Team2Component implements OnInit {
doSomething() {
throw new Error('Method not implemented.');
}
  users: any[] = [];
  message: string = '';
  receivedMessage: string = '';
  lastFromTeam: string = '';
  allTeams: string[] = ['team1','team3','team4','team5','team6','team7','team8','team9','team10'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.dataService.getUsers().subscribe({
       next: (data: { name: string; email: string; city?: string }[]) => this.users = data,
      error: (err: any) => console.error('Error fetching users:', err)
    });
  }

  sendMessageTo(team: string): void {
    if (this.message.trim()) {
      this.dataService.sendMessage(team, `From Team2: ${this.message}`);
      alert(`Message sent to ${team}`);
      this.message = '';
    }
  }
receiveMessageFrom(team: string): void {
  const msg = this.dataService.receiveMessage(team); // not 'team2'
  this.receivedMessage = msg ?? 'No message received.';
  this.lastFromTeam = team;
}

}
