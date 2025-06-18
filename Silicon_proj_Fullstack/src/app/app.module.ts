import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Team1Component } from './teams/team1/team1.component';
import { Team2Component } from './teams/team2/team2.component';
import { Team3Component } from './teams/team3/team3.component';
import { Team4Component } from './teams/team4/team4.component';
import { Team5Component } from './teams/team5/team5.component';
import { Team6Component } from './teams/team6/team6.component';
import { Team7Component } from './teams/team7/team7.component';
import { Team8Component } from './teams/team8/team8.component';
import { Team9Component } from './teams/team9/team9.component';
import { Team10Component } from './teams/team10/team10.component';

@NgModule({
  declarations: [
    AppComponent,
    Team1Component,
    Team2Component,
    Team3Component,
    Team4Component,
    Team5Component,
    Team6Component,
    Team7Component,
    Team8Component,
    Team9Component,
    Team10Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
