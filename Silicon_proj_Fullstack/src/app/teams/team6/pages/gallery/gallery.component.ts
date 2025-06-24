import { Component } from '@angular/core';

interface GalleryItem {
  title: string;
  description: string;
  category: string;
  image:string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
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

  constructor() { }

  onLearnMore(item: GalleryItem) {
    console.log('Learn more about:', item.title);
    // Add navigation or modal logic
  }
}
