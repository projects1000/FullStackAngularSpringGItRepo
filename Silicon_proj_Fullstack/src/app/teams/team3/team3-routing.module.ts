import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team3Component } from './team3.component';

const routes: Routes = [{ path: '', component: Team3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team3RoutingModule { }
