import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team4Component } from './team4.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

//child packages
import { AboutSiliconComponent } from './about/about-silicon/about-silicon.component';
import { CollaborationsComponent } from './about/collaborations/collaborations.component';
import { RankingRecognitionComponent } from './about/ranking-recognition/ranking-recognition.component';
import { MandatoryDisclosureComponent } from './about/mandatory-disclosure/mandatory-disclosure.component';

const routes: Routes = [
  {
    path: '',
    component: Team4Component,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: '', redirectTo: 'about-silicon', pathMatch: 'full' },
          { path: 'about-silicon', component: AboutSiliconComponent },
          { path: 'collaborations', component: CollaborationsComponent },
          { path: 'ranking-recognition', component: RankingRecognitionComponent },
          { path: 'mandatory-disclosure', component: MandatoryDisclosureComponent }
        ]
      },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team4RoutingModule { }
