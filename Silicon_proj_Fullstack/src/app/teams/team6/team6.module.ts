import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team6RoutingModule } from './team6-routing.module';
import { Team6Component } from './team6.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    Team6Component,
    PagesComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    Team6RoutingModule
  ]
})
export class Team6Module { }
