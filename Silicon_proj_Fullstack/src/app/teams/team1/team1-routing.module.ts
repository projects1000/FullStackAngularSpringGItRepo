import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team1Component } from './team1.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
{
      path: '',
    component: Team1Component,
    children: [
      { path: '', component: HomeComponent }, // default route = home
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team1RoutingModule { }
