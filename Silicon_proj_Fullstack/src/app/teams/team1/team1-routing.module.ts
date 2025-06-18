import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team1Component } from './team1.component';

const routes: Routes = [{ path: '', component: Team1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team1RoutingModule { }
