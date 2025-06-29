import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team7Component } from './team7.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
      path: '',
      component: Team7Component,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'contact', component: ContactComponent },
      ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class Team7RoutingModule { }