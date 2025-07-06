import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team3RoutingModule } from './team3-routing.module';
import { Team3Component } from './team3.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnuragComponent } from './pages/work/anurag/anurag.component';
import { DigdarshanComponent } from './pages/work/digdarshan/digdarshan.component';
import { AkashComponent } from './pages/work/akash/akash.component';
import { AswiniComponent } from './pages/work/aswini/aswini.component';
import { AbhisekComponent } from './pages/work/abhisek/abhisek.component';
import { KhushiComponent } from './pages/work/khushi/khushi.component';
import { ShrutiComponent } from './pages/work/shruti/shruti.component';
import { KritidayaComponent } from './pages/work/kritidaya/kritidaya.component';

@NgModule({
  declarations: [
    Team3Component,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    AnuragComponent,
    DigdarshanComponent,
    AkashComponent,
    AswiniComponent,
    AbhisekComponent,
    KhushiComponent,
    ShrutiComponent,
    KritidayaComponent,
  ],
  imports: [
    CommonModule,
    Team3RoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Team3Module { }
