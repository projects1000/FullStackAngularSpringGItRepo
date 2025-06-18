import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team4Component } from './team4.component';

const routes: Routes = [{ path: '', component: Team4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team4RoutingModule { }
