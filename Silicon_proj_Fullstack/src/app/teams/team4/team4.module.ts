import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team4RoutingModule } from './team4-routing.module';
import { Team4Component } from './team4.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    Team4Component,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    Team4RoutingModule,
    SharedModule
  ]
})
export class Team4Module { }
