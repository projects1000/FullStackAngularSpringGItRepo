import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team1Component } from './teams/team1/team1.component';
import { Team10Component } from './teams/team10/team10.component';
import { Team2Component } from './teams/team2/team2.component';
import { Team3Component } from './teams/team3/team3.component';
import { Team4Component } from './teams/team4/team4.component';
import { Team5Component } from './teams/team5/team5.component';
import { Team6Component } from './teams/team6/team6.component';
import { Team7Component } from './teams/team7/team7.component';
import { Team8Component } from './teams/team8/team8.component';
import { Team9Component } from './teams/team9/team9.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  { path: 'team1', component: Team1Component },
  { path: 'team2', component: Team2Component },
  { path: 'team3', component: Team3Component },
  { path: 'team4', component: Team4Component },
  { path: 'team5', component: Team5Component },
  { path: 'team6', component: Team6Component },
  { path: 'team7', component: Team7Component },
  { path: 'team8', component: Team8Component },
  { path: 'team9', component: Team9Component },
  { path: 'team10', component: Team10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
