import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/other/header/header.component';
import { FooterComponent } from './components/other/footer/footer.component';
import { NavigationComponent } from './components/other/navigation/navigation.component';
import { HomeComponent } from './components/views/home/home.component';
import { GalleryComponent } from './components/views/gallery/gallery.component';
import { AboutComponent } from './components/views/about/about.component';
import { CardComponent } from './components/other/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
