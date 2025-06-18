import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team8RoutingModule } from './team8-routing.module';
import { Team8Component } from './team8.component';


@NgModule({
  declarations: [
    Team8Component
  ],
  imports: [
    CommonModule,
    Team8RoutingModule
  ]
})
export class Team8Module { }
