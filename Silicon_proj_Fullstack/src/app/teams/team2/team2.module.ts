import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team2RoutingModule } from './team2-routing.module';
import { Team2Component } from './team2.component';
import { SharedModule } from "../../shared/shared.module";
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Team2Component,
    AboutComponent
  ],
  imports: [
    CommonModule,
    Team2RoutingModule,
    SharedModule,
    FormsModule
]
})
export class Team2Module { }
