import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team1RoutingModule } from './team1-routing.module';
import { Team1Component } from './team1.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    Team1Component,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    Team1RoutingModule,
    SharedModule
]

})
export class Team1Module { }
