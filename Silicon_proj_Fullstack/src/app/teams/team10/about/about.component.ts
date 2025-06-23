import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  port: string = window.location.port;
  hostname: string = window.location.hostname;
  contactUrl: string;

  constructor() {
    this.contactUrl = `http://${this.hostname}:${this.port}/team10/contact`;
  }
}
