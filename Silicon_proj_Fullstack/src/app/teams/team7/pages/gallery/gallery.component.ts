import { Component } from '@angular/core';

type TabType = 'Team' | 'Event';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  activeTab: TabType = 'Team';

  galleryData: Record<TabType, { name?: string; image: string }[]> = {
    Team: [
      { name: 'Arpita', image: 'assets/team7-gallery/teams/arpita.jpg'},
      { name: 'Jyoti', image: 'assets/team7-gallery/teams/jyoti.avif' },
      { name: 'Sobha', image: 'assets/team7-gallery/teams/sobha.webp' },
      { name: 'sajeya', image: 'assets/team7-gallery/teams/sajeya.avif' },
      { name: 'akanshay', image: 'assets/team7-gallery/teams/akanshay.avif' },
      { name: 'ipsita', image: 'assets/team7-gallery/teams/ipsita.avif'},
      { name: 'soma', image: 'assets/team7-gallery/teams/anjali.avif' },
      
      
    ],
    Event: [
      { image: 'assets/team7-gallery/events/celebration1.jpg' },
      { image: 'assets/team7-gallery/events/diwali.jpg' },
      { image: 'assets/team7-gallery/events/holi.webp' },
      { image: 'assets/team7-gallery/events/event1.jpeg' },
      { image: 'assets/team7-gallery/events/event2.webp' },
      { image: 'assets/team7-gallery/events/event3.webp' },
      { image: 'assets/team7-gallery/events/event4.webp' },
      { image: 'assets/team7-gallery/events/OIP.webp' },
      { image: 'assets/team7-gallery/events/event5.webp' },
      { image: 'assets/team7-gallery/events/event6.webp' }

    ]
  };

  setActiveTab(tab: TabType) {
    this.activeTab = tab;
  }
}
