import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './teams/team9/pages/home/home.component';
import { ContactComponent } from './teams/team9/pages/contact/contact.component';
import { GalleryComponent } from './teams/team9/pages/gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'team1', pathMatch: 'full' },
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {
    path: 'team1',
    loadChildren: () =>
      import('./teams/team1/team1.module').then((m) => m.Team1Module),
  },
  {
    path: 'team2',
    loadChildren: () =>
      import('./teams/team2/team2.module').then((m) => m.Team2Module),
  },
  {
    path: 'team3',
    loadChildren: () =>
      import('./teams/team3/team3.module').then((m) => m.Team3Module),
  },
  {
    path: 'team4',
    loadChildren: () =>
      import('./teams/team4/team4.module').then((m) => m.Team4Module),
  },
  {
    path: 'team5',
    loadChildren: () =>
      import('./teams/team5/team5.module').then((m) => m.Team5Module),
  },
  {
    path: 'team6',
    loadChildren: () =>
      import('./teams/team6/team6.module').then((m) => m.Team6Module),
  },
  {
    path: 'team7',
    loadChildren: () =>
      import('./teams/team7/team7.module').then((m) => m.Team7Module),
  },
  {
    path: 'team8',
    loadChildren: () =>
      import('./teams/team8/team8.module').then((m) => m.Team8Module),
  },
  {
    path: 'team9',
    loadChildren: () =>
      import('./teams/team9/team9.module').then((m) => m.Team9Module),
  },
  {
    path: 'team10',
    loadChildren: () =>
      import('./teams/team10/team10.module').then((m) => m.Team10Module),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
