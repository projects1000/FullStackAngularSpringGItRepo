import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { HomeComponent } from './team7/pages/home/home.component';
// import { AboutComponent } from './team7/pages/about/about.component';
// import { GalleryComponent } from './team7/pages/gallery/gallery.component';
// import { ContactComponent } from './team7/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent
    // HomeComponent,
    // AboutComponent,
    // GalleryComponent,
    // ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
