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

  members = [
    {
      name: 'Pratyush',
      img: '../../../../assets/team10/assets/Memeber1.jpg',
      github: 'https://github.com/pratyush-git',
      key: 'pratyush'
    },
    {
      name: 'Aditya',
      img: '../../../../assets/team10/assets/Screenshot183431.png',
      github: 'https://github.com/aditya-git',
      key: 'aditya'
    },
    {
      name: 'Trisha',
      img: '../../../../assets/team10/assets/Member3.jpg',
      github: 'https://github.com/trisha-git',
      key: 'trisha'
    },
    {
      name: 'P.Priyadrashi',
      img: '../../../../assets/team10/assets/Screenshot2025.png',
      github: 'https://github.com/priyadrashi-git',
      key: 'priyadrashi'
    },
    {
      name: 'Swetalina',
      img: '../../../../assets/team10/assets/Memeber4.jpg',
      github: 'https://github.com/swetalina-git',
      key: 'swetalina'
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
