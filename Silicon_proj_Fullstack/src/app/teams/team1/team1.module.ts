import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team1RoutingModule } from './team1-routing.module';
import { Team1Component } from './team1.component';
import { MembersComponent } from './members/members.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    MembersComponent,
    BlogsComponent,
    Team1Component
  ],
  imports: [
    CommonModule,
    Team1RoutingModule,
    
  ],
})
export class Team1Module { }
