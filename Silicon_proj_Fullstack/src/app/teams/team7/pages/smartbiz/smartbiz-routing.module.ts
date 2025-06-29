import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartbizHomeComponent } from './smartbiz-home/smartbiz-home.component';
import { ArpitaComponent } from './pages/arpita/arpita.component';
import { AkanshaComponent } from './pages/akansha/akansha.component';
import { IpsitaComponent } from './pages/ipsita/ipsita.component';
import { JyotiComponent } from './pages/jyoti/jyoti.component';
import { SajeyaComponent } from './pages/sajeya/sajeya.component';
import { ShobhaComponent } from './pages/shobha/shobha.component';
import { SomaComponent } from './pages/soma/soma.component';

const routes: Routes = [
  {
    path: '',
    component: SmartbizHomeComponent,
    children: [
      { path: 'arpita', component: ArpitaComponent },
      { path: 'jyoti', component: JyotiComponent },
      { path: 'shobha', component: ShobhaComponent },
      { path: 'soma', component: SomaComponent },
      { path: 'sajeya', component: SajeyaComponent },
      { path: 'akansha', component: AkanshaComponent },
      { path: 'ipsita', component: IpsitaComponent },
    ],
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartbizRoutingModule { }
