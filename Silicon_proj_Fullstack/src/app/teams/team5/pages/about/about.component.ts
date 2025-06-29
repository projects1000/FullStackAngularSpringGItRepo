import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // teamLeader = {
  //   name: 'Chinmay',
  //   role: 'Team Leader',
  //   image: 'assets/team5-Gallery/chinmay.jpg'
  // };

  teamMembers = [
    {name: 'Chinmay', image:'assets/team5-Gallery/chinmay.jpg', role:'Team Lead'},
    { name: 'Aditya', image: 'assets/team5-Gallery/aditya.jpg', role:'Member'},
    { name: 'Anwesha', image: 'assets/team5-Gallery/Anwesha.jpg', role:'Member'},
    { name: 'Lopamudra', image: 'assets/team5-Gallery/lopamudra.jpg', role:'Member'},
    { name: 'Rakesh', image: 'assets/team5-Gallery/rakesh.jpg', role:'Member' },
    { name: 'Satyajit', image: 'assets/team5-Gallery/satyajit.jpg', role:'Member'},
    { name: 'Subhranshu', image: 'assets/team5-Gallery/subhranshu.jpg', role:'Member'},
    { name: 'Sonali', image: 'assets/team5-Gallery/sonali.jpg', role:'Member'}
  ];
}
