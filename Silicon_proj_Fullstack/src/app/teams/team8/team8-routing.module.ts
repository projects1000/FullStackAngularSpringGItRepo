import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team8Component } from './team8.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { GalleryComponent } from './features/gallery/gallery.component';

const routes: Routes = [
  { path: '', 
    component: Team8Component,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'contact',component:ContactComponent},
      {path:'about',component:AboutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team8RoutingModule { }
