import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Team4RoutingModule } from './team4-routing.module';
import { Team4Component } from './team4.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutSiliconComponent } from './about/about-silicon/about-silicon.component';
import { CollaborationsComponent } from './about/collaborations/collaborations.component';
import { RankingRecognitionComponent } from './about/ranking-recognition/ranking-recognition.component';
import { MandatoryDisclosureComponent } from './about/mandatory-disclosure/mandatory-disclosure.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    Team4Component,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    AboutSiliconComponent,
    CollaborationsComponent,
    RankingRecognitionComponent,
    MandatoryDisclosureComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    Team4RoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class Team4Module { }
