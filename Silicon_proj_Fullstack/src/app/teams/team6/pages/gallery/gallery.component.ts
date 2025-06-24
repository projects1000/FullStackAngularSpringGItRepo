import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Lightbox } from 'ngx-lightbox';

interface GalleryItem {
  title: string;
  description: string;
  category: string;
  image:string;
}
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
            style({ opacity: 0, transform: 'scale(0.8)' }),
            stagger('120ms', animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class GalleryComponent {
    products = [
  {
    title: 'Virtual Reality Workspace',
    description: 'A collaborative VR environment for remote tech teams.',
    link: 'https://example.com/vr-workspace',
    imageUrl: 'assets/team6-gallery/vr-workspace.jpg'
  },
  {
    title: 'AI-Powered Code Optimizer',
    description: 'Tool that analyzes and optimizes code performance using AI.',
    link: 'https://example.com/ai-code-optimizer',
    imageUrl: 'assets/team6-gallery/ai-code-optimizer.jpg'
  },
  {
    title: 'Biometric Security System',
    description: 'Next-gen security using facial, iris, and fingerprint detection.',
    link: 'https://example.com/biometric-security',
    imageUrl: 'assets/team6-gallery/biometric-security.jpg'
  },
  {
    title: 'Smart Traffic Controller',
    description: 'AI-powered traffic system for urban smart cities.',
    link: 'https://example.com/smart-traffic',
    imageUrl: 'assets/team6-gallery/smart-traffic.jpg'
  },
  {
    title: 'Autonomous Drone Delivery',
    description: 'Automated drone fleet for urban package delivery.',
    link: 'https://example.com/drone-delivery',
    imageUrl: 'assets/team6-gallery/drone-delivery.jpg'
  },
  {
    title: 'AI Music Composer',
    description: 'Compose original music tracks using AI-driven composition.',
    link: 'https://example.com/ai-music',
    imageUrl: 'assets/team6-gallery/ai-music.jpg'
  }
];

  constructor(private lightbox: Lightbox) {}

  open(index: number): void {
    const album = this.products.map(product => ({
      src: product.imageUrl,
      caption: `${product.title} - ${product.description}`,
      thumb: product.imageUrl
    }));
    this.lightbox.open(album, index);
  }
galleryItems: GalleryItem[] = [
      {
    title: "Spring Boot Setup",
    description: "Project initialization and configuration",
    category: "Backend",
    image: "https://example.com/spring-boot-setup.jpg" // Replace with actual image URL
  },
  {
    title: "REST API Design",
    description: "Creating robust RESTful services",
    category: "API",
    image: "https://example.com/rest-api-design.jpg" // Replace with actual image URL
  },
  {
    title: "Angular Forms",
    description: "Reactive and template-driven forms",
    category: "Frontend",
    image: "https://example.com/angular-forms.jpg" // Replace with actual image URL
  },
  {
    title: "Database Integration",
    description: "JPA and Hibernate implementation",
    category: "Database",
    image: "https://example.com/database-integration.jpg" // Replace with actual image URL
  },
  {
    title: "Security Implementation",
    description: "JWT authentication and authorization",
    category: "Security",
    image: "https://example.com/security-implementation.jpg" // Replace with actual image URL
  }
  ];

  onLearnMore(item: GalleryItem) {
    console.log('Learn more about:', item.title);
    // Add navigation or modal logic
  }
}
