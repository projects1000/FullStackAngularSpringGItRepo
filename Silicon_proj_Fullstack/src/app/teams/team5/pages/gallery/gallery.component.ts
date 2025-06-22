import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
   animations: [
    trigger('galleryAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger('150ms', animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)'})))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class GalleryComponent {
 projects = [
   {
    title: 'AI Chatbot Assistant',
    description: 'A smart chatbot for customer support using NLP and machine learning.',
    link: 'https://example.com/ai-chatbot',
    backgroundUrl: 'https://source.unsplash.com/300x200/?ai,technology'
  },
  {
    title: 'IoT Smart Home',
    description: 'An intelligent home automation system controlled via a mobile app.',
    link: 'https://example.com/iot-smart-home',
    backgroundUrl: 'https://source.unsplash.com/400x300/?iot,smart-home'
  },
  {
    title: 'Cloud Monitoring Tool',
    description: 'A dashboard for real-time cloud infrastructure monitoring and alerts.',
    link: 'https://example.com/cloud-monitoring',
    backgroundUrl: 'https://source.unsplash.com/400x300/?cloud,monitoring'
  },
  {
    title: 'Cybersecurity Threat Scanner',
    description: 'A threat detection system for enterprise networks using AI-based analysis.',
    link: 'https://example.com/cybersecurity-scanner',
    backgroundUrl: 'https://source.unsplash.com/400x300/?cybersecurity,hacking'
  },
  {
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting platform powered by blockchain technology.',
    link: 'https://example.com/blockchain-voting',
    backgroundUrl: 'https://source.unsplash.com/400x300/?blockchain,voting'
  },
  {
    title: 'Augmented Reality App',
    description: 'An AR mobile application for interactive learning experiences.',
    link: 'https://example.com/ar-learning-app',
    backgroundUrl: 'https://source.unsplash.com/400x300/?augmented-reality,technology'
  }
  
  ];

  constructor() {}


  open(index: number): void {
  const images = this.projects.map(project => ({
    src: project.backgroundUrl,
    caption: `${project.title} - ${project.description}`,
    thumb: project.backgroundUrl
  }));
  console.log('Opening image:', images[index]);
}

}
