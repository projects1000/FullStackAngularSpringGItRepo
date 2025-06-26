import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Lightbox } from 'ngx-lightbox';
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
    imageUrl: 'http://localhost:4200/assets/team6-gallery/vr-workspace.jpg'
  },
  {
    title: 'AI-Powered Code Optimizer',
    description: 'Tool that analyzes and optimizes code performance using AI.',
    link: 'https://example.com/ai-code-optimizer',
    imageUrl: 'http://localhost:4200/assets/team6-gallery/ai-code-optimizer.jpg'
  },
  {
    title: 'Biometric Security System',
    description: 'Next-gen security using facial, iris, and fingerprint detection.',
    link: 'https://example.com/biometric-security',
    imageUrl: 'http://localhost:4200/assets/team6-gallery/biometric-security.jpg'
  },
  {
    title: 'Smart Traffic Controller',
    description: 'AI-powered traffic system for urban smart cities.',
    link: 'https://example.com/smart-traffic',
    imageUrl: 'http://localhost:4200/assets/team6-gallery/smart-traffic.jpg'
  },
  {
    title: 'Autonomous Drone Delivery',
    description: 'Automated drone fleet for urban package delivery.',
    link: 'https://example.com/drone-delivery',
    imageUrl: 'http://localhost:4200/assets/team6-gallery/drone-delivery.jpg'
  },
  {
    title: 'AI Music Composer',
    description: 'Compose original music tracks using AI-driven composition.',
    link: 'https://example.com/ai-music',
    imageUrl: 'http://localhost:4200/assets/team6-gallery/ai-music.jpg'
  }
];

//   constructor(private lightbox: Lightbox) {}

  open(index: number): void {
    const album = this.products.map(product => ({
      src: product.imageUrl,
      caption: `${product.title} - ${product.description}`,
      thumb: product.imageUrl
    }));
    this.lightbox.open(album, index);
  }


}
