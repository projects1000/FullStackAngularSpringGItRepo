import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team6Component } from './team6.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [{ path: '', component: Team6Component },
   { path: 'home', component: HomeComponent },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team6RoutingModule { }
