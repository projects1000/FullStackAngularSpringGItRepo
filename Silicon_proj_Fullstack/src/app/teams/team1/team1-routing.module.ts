import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team1Component } from './team1.component';
import { MembersComponent } from './members/members.component';
import { BlogsComponent } from './blogs/blogs.component'

const routes: Routes = [
{
    path: '',
    component: Team1Component,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'members', component:MembersComponent },
      { path: 'blogs', component: BlogsComponent },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team1RoutingModule { }
