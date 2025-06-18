import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team7Component } from './team7.component';

const routes: Routes = [{ path: '', component: Team7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team7RoutingModule { }
