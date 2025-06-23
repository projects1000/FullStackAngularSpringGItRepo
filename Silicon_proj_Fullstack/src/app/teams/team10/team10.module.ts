import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team10RoutingModule } from './team10-routing.module';
import { Team10Component } from './team10.component';


@NgModule({
  declarations: [
    Team10Component
  ],
  imports: [
    CommonModule,
    Team10RoutingModule
  ]
})
export class Team10Module { }
