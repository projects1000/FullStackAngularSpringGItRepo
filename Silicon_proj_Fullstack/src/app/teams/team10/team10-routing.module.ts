import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team10Component } from './team10.component';

const routes: Routes = [{ path: '', component: Team10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team10RoutingModule { }
