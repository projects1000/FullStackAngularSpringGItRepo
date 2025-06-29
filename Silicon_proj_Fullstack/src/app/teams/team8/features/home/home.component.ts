import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-team8-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngAfterViewInit() {
    const text = 'Team 8: Innovators of the Future 🌟';
    const target = document.querySelector('.typewriter') as HTMLElement;
    let index = 0;

    if (target) {
      const interval = setInterval(() => {
        target.textContent += text.charAt(index);
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 80);
    }
  }
}
