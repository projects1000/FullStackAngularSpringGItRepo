import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team10RoutingModule } from './team10-routing.module';
import { Team10Component } from './team10.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    Team10Component,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
        Team10RoutingModule,
        SharedModule,
  ]
})
export class Team10Module { }
