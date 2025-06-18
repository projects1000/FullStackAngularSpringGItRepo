import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team3RoutingModule } from './team3-routing.module';
import { Team3Component } from './team3.component';


@NgModule({
  declarations: [
    Team3Component
  ],
  imports: [
    CommonModule,
    Team3RoutingModule
  ]
})
export class Team3Module { }
