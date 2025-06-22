import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team8RoutingModule } from './team8-routing.module';
import { Team8Component } from './team8.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryComponent } from './features/gallery/gallery.component';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';


@NgModule({
  declarations: [
    Team8Component,
    GalleryComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    Team8RoutingModule,
    SharedModule
  ]
})
export class Team8Module { }
