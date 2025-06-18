import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team4RoutingModule } from './team4-routing.module';
import { Team4Component } from './team4.component';


@NgModule({
  declarations: [
    Team4Component
  ],
  imports: [
    CommonModule,
    Team4RoutingModule
  ]
})
export class Team4Module { }
