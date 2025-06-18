import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team9RoutingModule } from './team9-routing.module';
import { Team9Component } from './team9.component';


@NgModule({
  declarations: [
    Team9Component
  ],
  imports: [
    CommonModule,
    Team9RoutingModule
  ]
})
export class Team9Module { }
