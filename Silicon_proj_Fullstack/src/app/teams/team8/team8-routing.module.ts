import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team8Component } from './team8.component';

const routes: Routes = [{ path: '', component: Team8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team8RoutingModule { }
