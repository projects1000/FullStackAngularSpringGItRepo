import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SmartbizHomeComponent } from './smartbiz-home/smartbiz-home.component';

const routes: Routes = [
  { path: '', component: SmartbizHomeComponent }
];

@NgModule({
  declarations: [SmartbizHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SmartbizModule {}
