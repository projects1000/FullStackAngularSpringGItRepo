import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  users: any[] = [];
  showLoading = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  loadUsers() {
    this.showLoading = true;
    this.dataService.getUsers().subscribe((data) => {
      this.users = data;
      this.showLoading = false;
    });
  }

  teamName: string = 'Team 7 - Innovation Division';

  teamLead = {
    name: 'Arpita',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  };

  mission: string = 'We are passionate about innovation and technology. Our goal is to build impactful digital solutions that solve real-world problems with creativity and collaboration.';

  teamMembers = [
    { name: 'Arpita', role: 'Frontend Developer' },
    { name: 'Jyoti Karmakar', role: 'Backend Developer' },
    { name: 'Shobha Mahato', role: 'UI/UX Designer' },
    { name: 'Soma Tiwary', role: 'DevOps Engineer' },
    { name: 'Sajeya Quadri', role: 'Quality Analyst' },
    { name: 'Akansha', role: 'Quality Analyst' },
    { name: 'Ipsita P.Mishra', role: 'Quality Analyst' }
  ];

}
