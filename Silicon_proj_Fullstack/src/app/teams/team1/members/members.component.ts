import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  teamMembers: string[] = [
    'Biswa Prachurjya',
    'Pradipta Padhiary',
    'Khushi Singh',
    'Dibyesh Mohanty',
    'Ashutosh Rout',
    'Nitin Kumar Samal',
    'Debjani Sahu',
    'Sk Ayaz Ali'
  ];
}
