import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team6RoutingModule } from './team6-routing.module';
import { Team6Component } from './team6.component';


@NgModule({
  declarations: [
    Team6Component
  ],
  imports: [
    CommonModule,
    Team6RoutingModule
  ]
})
export class Team6Module { }
