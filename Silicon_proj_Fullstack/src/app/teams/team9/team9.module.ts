import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team9RoutingModule } from './team9-routing.module';
import { Team9Component } from './team9.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module'; // ✅ Correct path to where topbar/footer are declared
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    Team9Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    Team9RoutingModule,
    SharedModule, // ✅ Add this
    MatCardModule
  ]
})
export class Team9Module {}
