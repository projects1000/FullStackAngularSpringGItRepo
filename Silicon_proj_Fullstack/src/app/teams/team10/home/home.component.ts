import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
      img: '../../../../assets/team10/assets/Memeber1.jpg',
      github: 'https://github.com/pratyushkumar-04',
      key: 'pratyush'
      ,username:'pratyushkumar-04'
    },
    {
      name: 'Aditya',
      img: '../../../../assets/team10/assets/Screenshot183431.png',
      github: 'https://github.com/Adityasharma0709',
      key: 'aditya'
      ,username:'Adityasharma0709'
    },
    {
      name: 'Trisha',
      img: '../../../../assets/team10/assets/Member3.jpg',
      github: 'https://github.com/Trisha123',
      key: 'trisha'
      ,username:'Trisha123'
    },
    {
      name: 'P.Priyadrashi',
      img: '../../../../assets/team10/assets/Screenshot2025.png',
      github: 'https://github.com/pratyush2004-vamp',
      key: 'priyadrashi'
      ,username:'pratyush2004-vamp'
    },
    {
      name: 'Swetalina',
      img: '../../../../assets/team10/assets/Memeber4.jpg',
      github: 'https://github.com/Swetalina-cyber',
      key: 'swetalina'
      ,username:'Swetalina-cyber'
    }
  ];

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
