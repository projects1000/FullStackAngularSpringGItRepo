import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartbizRoutingModule } from './smartbiz-routing.module';
import { SmartbizHomeComponent } from './smartbiz-home/smartbiz-home.component';
import { ArpitaComponent } from './pages/arpita/arpita.component';
import { JyotiComponent } from './pages/jyoti/jyoti.component';
import { ShobhaComponent } from './pages/shobha/shobha.component';
import { SomaComponent } from './pages/soma/soma.component';
import { SajeyaComponent } from './pages/sajeya/sajeya.component';
import { AkanshaComponent } from './pages/akansha/akansha.component';
import { IpsitaComponent } from './pages/ipsita/ipsita.component';


@NgModule({
  declarations: [
    SmartbizHomeComponent,
    ArpitaComponent,
    JyotiComponent,
    ShobhaComponent,
    SomaComponent,
    SajeyaComponent,
    AkanshaComponent,
    IpsitaComponent
  ],
  imports: [
    CommonModule,
    SmartbizRoutingModule
  ]
})
export class SmartbizModule { }
