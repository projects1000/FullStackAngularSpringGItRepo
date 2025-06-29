import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  activeTab: string = 'Team';

  galleryData: { [key: string]: any[] } = {
    Team: [
      { name: 'Aryan', image: 'assets/team8gallery/aryan.jpeg' },
      { name: 'Parth', image: 'assets/team8gallery/parth.jpeg' },
      { name: 'Asish Morial', image: 'assets/team8gallery/asish-morial.jpeg' },
      { name: 'Ashish Pradhan', image: 'assets/team8gallery/ashish-pradhan.jpeg' },
      { name: 'Pritam', image: 'assets/team8gallery/pritam.jpeg' },
      { name: 'Himanshu', image: 'assets/team8gallery/himanshu.jpeg' },
      { name: 'Tushar', image: 'assets/team8gallery/tushar.jpeg' }
    ],
    Projects: [
      { title: 'Smartbiz', image: 'assets/team8gallery/Smartbiz.jpeg' },
      { title: 'Student-portal', image: 'assets/team8gallery/student-portal.jpeg' },
      { title: 'movie-gallery', image: 'assets/team8gallery/movie-gallery.jpeg' },
      { title: 'College-site', image: 'assets/team8gallery/college-site.jpeg' }
    ]
  };

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
