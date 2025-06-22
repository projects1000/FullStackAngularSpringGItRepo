import { Component } from '@angular/core';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.scss']
})
export class Team2Component {
doSomething() {
    alert('Team 2 action!');
  }
}
