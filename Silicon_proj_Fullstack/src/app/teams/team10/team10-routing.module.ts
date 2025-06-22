import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team10Component } from './team10.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path: '', component: Team10Component, 
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: 'home', component: HomeComponent },
      {path:'contact',component:ContactComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team10RoutingModule { }
