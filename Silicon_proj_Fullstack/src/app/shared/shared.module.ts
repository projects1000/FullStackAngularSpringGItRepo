import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopbarComponent]
})
export class SharedModule { }
