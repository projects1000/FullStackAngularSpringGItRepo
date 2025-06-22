import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    {
      title: 'Angular Logo',
      url: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      title: 'Spring Boot Logo',
      url: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'
    },
    {
      title: 'Java Logo',
      url: 'https://www.vectorlogo.zone/logos/java/java-icon.svg'
    },
    {
      title: 'Angular CLI',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    {
      title: 'Spring Boot Project Structure',
      url: 'https://i.imgur.com/bAqK7Uo.png'
    },
    {
      title: 'Java Code Example',
      url: 'https://i.imgur.com/LcSpfLa.png'
    }
  ];
}
