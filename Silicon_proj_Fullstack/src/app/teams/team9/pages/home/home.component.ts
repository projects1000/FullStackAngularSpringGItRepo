import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  programs = [
  { title: 'B.Tech - CSE', level: 'UG', duration: '4 years', icon: '💻', color: '#e3f2fd' },
  { title: 'B.Tech - ECE', level: 'UG', duration: '4 years', icon: '📡', color: '#fce4ec' },
  { title: 'B.Tech - EEE', level: 'UG', duration: '4 years', icon: '🔌', color: '#f3e5f5' },
  { title: 'B.Tech -EIE', level: 'UG', duration: '4 years', icon: '📈', color: '#fff8e1' },
  { title: 'M.Tech - CSE, ECE, Power', level: 'PG', duration: '2 years', icon: '📘', color: '#e8f5e9' },
  { title: 'M.Sc - Data Science, VLSI', level: 'PG', duration: '2 years', icon: '🔬', color: '#ede7f6' },
  { title: 'MCA - Computer Applications', level: 'PG', duration: '2 years', icon: '🧮', color: '#e0f7fa' },
  { title: 'Integrated BCA+MCA', level: 'UG+PG', duration: '5 years', icon: '📊', color: '#fff3e0' },
  { title: 'Ph.D.', level: 'Doctorate', duration: '3-5 years', icon: '🎓', color: '#e1f5fe' }
];
}
