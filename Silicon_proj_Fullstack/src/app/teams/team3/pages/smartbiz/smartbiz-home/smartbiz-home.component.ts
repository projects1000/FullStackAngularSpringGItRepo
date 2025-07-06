import { Component } from '@angular/core';

@Component({
  selector: 'app-smartbiz-home',
  templateUrl: './smartbiz-home.component.html',
  styleUrls: ['./smartbiz-home.component.css']
})
export class SmartbizHomeComponent {
  smartbizMembers = [
    { name: 'smartbiz-anurag', link: 'https://smartbiz-zhej.onrender.com/' },
    { name: 'smartbiz-digdarshan' },
    { name: 'smartbiz-akash' },
    { name: 'smartbiz-aswini' },
    { name: 'smartbiz-abhisek' },
    { name: 'smartbiz-khushi' },
    { name: 'smartbiz-shruti' },
    { name: 'smartbiz-kritidaya' }
  ];

  openLink(member: any) {
    if (member.link) {
      window.open(member.link, '_blank');
    }
  }
}
