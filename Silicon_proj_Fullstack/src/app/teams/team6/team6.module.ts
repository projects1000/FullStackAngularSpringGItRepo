import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team6RoutingModule } from './team6-routing.module';
import { Team6Component } from './team6.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    Team6Component,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    Team6RoutingModule,
    SharedModule
]
})
export class Team6Module { }
