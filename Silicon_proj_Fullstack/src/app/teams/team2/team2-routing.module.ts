import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team2Component } from './team2.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [{ path: '', component: Team2Component },
   { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team2RoutingModule { }
