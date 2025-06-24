import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team6RoutingModule } from './team6-routing.module';
import { Team6Component } from './team6.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Team6Component,
    HomeComponent,
  
  ],
  imports: [
    CommonModule,
    Team6RoutingModule,
    SharedModule,
    FormsModule
]
})
export class Team6Module { }
