import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team9Component } from './team9.component';

const routes: Routes = [{ path: '', component: Team9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team9RoutingModule { }
