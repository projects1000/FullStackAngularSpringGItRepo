
<<<<<<< HEAD
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Input() teamRoute: string = 'team1'; // default to team1
  activeIndex = 0;


  navItems = [
    { iconClass: 'fas fa-home', route: 'home' },
    { iconClass: 'fas fa-heart', route: 'about' },
    { iconClass: 'fa-solid fa-photo-film', route: 'gallery' },
    { iconClass: 'fa-solid fa-envelopes-bulk', route: 'contact' },
  ];

  setActive(index: number) {
    this.activeIndex = index;
  }

}
=======
>>>>>>> 2392b891e66382e0450c29f9ec15a88a82afafbb
