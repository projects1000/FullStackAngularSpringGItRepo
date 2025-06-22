import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team3RoutingModule } from './team3-routing.module';
import { Team3Component } from './team3.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Team3Component,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    Team3RoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class Team3Module { }
