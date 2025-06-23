import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit {

  ngAfterViewInit() {
    const text = 'Team 3: Builders of Tomorrow 🚀';
    const target = document.querySelector('.typewriter') as HTMLElement;
    let index = 0;

    if (target) {
      const interval = setInterval(() => {
        target.textContent += text.charAt(index);
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 80); // speed of typing
    }
  }
}
