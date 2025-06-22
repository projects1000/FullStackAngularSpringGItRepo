import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  backgroundStyle = '';
  contactCardColor = '';
  formCardColor = '';

  private gradientColors = [
    'linear-gradient(to right, #e0f7fa, #fffde7)',
    'linear-gradient(to right, #fceabb, #f8b500)',
    'linear-gradient(to right, #fbd3e9, #bb377d)',
    'linear-gradient(to right, #c6ffdd, #fbd786)',
    'linear-gradient(to right, #dce35b, #45b649)',
    'linear-gradient(to right, #ffecd2, #fcb69f)',
    'linear-gradient(to right, #a1c4fd, #c2e9fb)'
  ];

  private deepColors = ['#2c3e50', '#34495e', '#8e44ad', '#2980b9', '#2c2c54', '#6c5ce7', '#4834d4'];

  ngOnInit(): void {
    this.changeBackground();
    this.contactCardColor = this.getRandomColor();
    this.formCardColor = this.getRandomColor();
    setInterval(() => this.changeBackground(), 4000); // Change every 4 seconds
  }

  private changeBackground(): void {
    const randomIndex = Math.floor(Math.random() * this.gradientColors.length);
    this.backgroundStyle = this.gradientColors[randomIndex];
  }

  private getRandomColor(): string {
    const index = Math.floor(Math.random() * this.deepColors.length);
    return this.deepColors[index];
  }
}

