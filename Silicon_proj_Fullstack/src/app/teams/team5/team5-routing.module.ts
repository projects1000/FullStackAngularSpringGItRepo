import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team5Component } from './team5.component';

const routes: Routes = [{ path: '', component: Team5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team5RoutingModule { }
