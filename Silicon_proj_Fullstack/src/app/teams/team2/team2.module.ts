import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team2RoutingModule } from './team2-routing.module';
import { Team2Component } from './team2.component';


@NgModule({
  declarations: [
    Team2Component
  ],
  imports: [
    CommonModule,
    Team2RoutingModule
  ]
})
export class Team2Module { }
