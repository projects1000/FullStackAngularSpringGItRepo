import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team7RoutingModule } from './team7-routing.module';
import { Team7Component } from './team7.component';


@NgModule({
  declarations: [
    Team7Component
  ],
  imports: [
    CommonModule,
    Team7RoutingModule
  ]
})
export class Team7Module { }
