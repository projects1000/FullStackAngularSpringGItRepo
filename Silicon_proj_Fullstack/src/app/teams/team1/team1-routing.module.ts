import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team1Component } from './team1.component';
import { MembersComponent } from './members/members.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';

const routes: Routes = [
{
    path: '',
    component: Team1Component,
    children: [
       { path: '', redirectTo: 'team1', pathMatch: 'full' },
  { path: 'members', component: MembersComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'courses', component: CoursesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'events', component: EventsComponent },
      { path: 'bootcamps', component: BootcampsComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team1RoutingModule { }
