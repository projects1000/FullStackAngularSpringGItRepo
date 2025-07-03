import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team3Component } from './team3.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnuragComponent } from './pages/work/anurag/anurag.component';
import { DigdarshanComponent } from './pages/work/digdarshan/digdarshan.component';
import { AkashComponent } from './pages/work/akash/akash.component';
import { AswiniComponent } from './pages/work/aswini/aswini.component';
import { AbhisekComponent } from './pages/work/abhisek/abhisek.component';
import { KhushiComponent } from './pages/work/khushi/khushi.component';
import { ShrutiComponent } from './pages/work/shruti/shruti.component';
import { KritidayaComponent } from './pages/work/kritidaya/kritidaya.component';

const routes: Routes = [
  {
    path: '',
    component: Team3Component,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'work/anurag', component: AnuragComponent },
      { path: 'work/digdarshan', component: DigdarshanComponent },
      { path: 'work/akash', component: AkashComponent },
      { path: 'work/aswini', component: AswiniComponent },
      { path: 'work/abhisek', component: AbhisekComponent },
      { path: 'work/khushi', component: KhushiComponent },
      { path: 'work/shruti', component: ShrutiComponent },
      { path: 'work/kritidaya', component: KritidayaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team3RoutingModule {}
