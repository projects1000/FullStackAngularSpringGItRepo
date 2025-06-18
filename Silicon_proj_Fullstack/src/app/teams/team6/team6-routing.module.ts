import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team6Component } from './team6.component';

const routes: Routes = [{ path: '', component: Team6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team6RoutingModule { }
