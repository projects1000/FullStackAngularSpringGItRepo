import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team5RoutingModule } from './team5-routing.module';
import { Team5Component } from './team5.component';


@NgModule({
  declarations: [
    Team5Component
  ],
  imports: [
    CommonModule,
    Team5RoutingModule
  ]
})
export class Team5Module { }
