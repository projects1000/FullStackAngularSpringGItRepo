import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Team7RoutingModule } from './team7-routing.module';
import { Team7Component } from './team7.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    Team7Component,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    Team7RoutingModule,
    SharedModule,
    ReactiveFormsModule,
     FormsModule, 
  ]
})
export class Team7Module { }