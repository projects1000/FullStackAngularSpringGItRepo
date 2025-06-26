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
      { name: 'Arpita', image: 'assets/images/teams/arpita.jpg'},
      { name: 'Harris', image: 'assets/images/teams/harris.avif'},
      { name: 'John', image: 'assets/images/teams/john.webp' },
      { name: 'Jyoti', image: 'assets/images/teams/jyoti.avif' },
      { name: 'Rahul', image: 'assets/images/teams/rahul.webp' },
      { name: 'Sobha', image: 'assets/images/teams/sobha.webp' },
      { name: 'sajeya', image: 'assets/images/teams/sajeya.avif' },
      { name: 'akanshay', image: 'assets/images/teams/akanshay.avif' },
      { name: 'ipsita', image: 'assets/images/teams/ipsita.avif'},
      { name: 'anjali', image: 'assets/images/teams/anjali.avif' },
      
      
    ],
    Event: [
      { image: 'assets/images/events/celebration1.jpg' },
      { image: 'assets/images/events/diwali.jpg' },
      { image: 'assets/images/events/holi.webp' },
      { image: 'assets/images/events/event1.jpeg' },
      { image: 'assets/images/events/event2.webp' },
      { image: 'assets/images/events/event3.webp' },
      { image: 'assets/images/events/event4.webp' },
      { image: 'assets/images/events/OIP.webp' },
      { image: 'assets/images/events/event5.webp' },
      { image: 'assets/images/events/event6.webp' }

    ]
  };

  setActiveTab(tab: TabType) {
    this.activeTab = tab;
  }
}
