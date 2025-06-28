import { Component, OnInit } from '@angular/core';

interface TechItem {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  technologies = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'Spring Boot', icon: '🧩' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'TypeScript', icon: '💠' },
    { name: 'Bootstrap', icon: '🎨' }
  ];

  strengths = [
    {
      icon: '🚀',
      title: 'Innovation Driven',
      desc: 'We believe in continuous innovation to build smarter and faster web applications.'
    },
    {
      icon: '🔐',
      title: 'Security First',
      desc: 'Our architecture prioritizes secure coding and data protection at every layer.'
    },
    {
      icon: '⚙️',
      title: 'Scalable Design',
      desc: 'Our solutions scale efficiently to meet growing user demands and enterprise needs.'
    }
  ];

  members = [
    {
      name: 'Manish Sharma',
      role: 'Team Leader | Angular Developer',
      img: 'assets/team-9Gallery/Photo/Manish.jpg'
    },
    {
      name: 'K Sudhakar Reddy',
      role: 'Backend Developer | Spring Boot',
      img: 'assets/team-9Gallery/Photo/Sudhakar.jpg'
    },
    {
      name: 'Sambit Hota',
      role: 'Angular Developer',
      img: 'assets/team-9Gallery/Photo/Sambit.jpg'
    },
    {
      name: 'Ajaya kumar Sahoo',
      role: 'Full Stack Developer',
      img: 'assets/team-9Gallery/Photo/Ajya.jpg'
    },
    {
      name: 'Siba Sankar Dash',
      role: 'Database Specialist | SQL',
      img: 'assets/team-9Gallery/Photo/siba.jpg'
    },
    {
      name: 'Bhabani Sankar Nanda',
      role: 'Database Specialist | SQL',
      img: 'assets/team-9Gallery/Photo/Bhabani.jpg'
    },
    {
      name: 'Bijaya karjee',
      role: 'Full Stack Developer',
      img: 'assets/team-9Gallery/Photo/Bijaya.jpg'
    }
  ];
}
