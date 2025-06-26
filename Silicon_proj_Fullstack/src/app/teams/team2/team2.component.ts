import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Adjust path based on your structure

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.scss']
})
export class Team2Component implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  doSomething() {
    alert('Team 2 action!');
  }
}
