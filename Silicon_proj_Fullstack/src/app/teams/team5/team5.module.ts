import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team5RoutingModule } from './team5-routing.module';
import { Team5Component } from './team5.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    Team5Component,
    AboutComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    Team5RoutingModule,
    SharedModule,
    ContactComponent
  ]
})
export class Team5Module { }
