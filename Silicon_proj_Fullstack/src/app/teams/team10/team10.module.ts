import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team10RoutingModule } from './team10-routing.module';
import { Team10Component } from './team10.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    Team10Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    Team10RoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  
  ],
})
export class Team10Module {}
