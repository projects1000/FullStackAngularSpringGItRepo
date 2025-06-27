import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() teamRoute: string = 'team1'; // default to team1
  navItems = [
    { iconClass: 'fas fa-home', route: 'home' },
    { iconClass: 'fas fa-heart', route: 'about' },
    { iconClass: 'fa-solid fa-photo-film', route: 'gallery' },
    { iconClass: 'fa-solid fa-envelopes-bulk', route: 'contact' },
  ];

  // setActive(index: number) {
  //   this.activeIndex = index;
  // }
  activeIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath = event.urlAfterRedirects;
        const index = this.navItems.findIndex((item) =>
          currentPath.includes(`/${this.teamRoute}/${item.route}`)
        );
        this.activeIndex = index;
      }
    });
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
}
