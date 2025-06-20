import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team1RoutingModule } from './team1-routing.module';
import { Team1Component } from './team1.component';
import { MembersComponent } from './members/members.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    MembersComponent,
    BlogsComponent,
    Team1Component,
    CoursesComponent,
    EventsComponent,
    BootcampsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    Team1RoutingModule,
    
  ],
})
export class Team1Module { }
