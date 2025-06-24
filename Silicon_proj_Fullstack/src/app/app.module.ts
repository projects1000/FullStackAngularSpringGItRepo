import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; // ✅ Required for HttpClient
import { LightboxModule } from 'ngx-lightbox';
import { Team5Module } from './teams/team5/team5.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,        // ✅ Add this line
    LightboxModule,
    BrowserAnimationsModule,
    Team5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
