import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team1RoutingModule } from './team1-routing.module';
import { Team1Component } from './team1.component';


@NgModule({
  declarations: [
    Team1Component
  ],
  imports: [
    CommonModule,
    Team1RoutingModule
  ]
})
export class Team1Module { }
