import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ----- MaterialUI -----
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/other/header/header.component';
import { FooterComponent } from './components/other/footer/footer.component';
import { NavigationComponent } from './components/other/navigation/navigation.component';
import { HomeComponent } from './components/views/home/home.component';
import { GalleryComponent } from './components/views/gallery/gallery.component';
import { AboutComponent } from './components/views/about/about.component';
import { CardComponent } from './components/other/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/other/spinner/spinner.component';
import { MissionComponent } from './components/views/mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    CardComponent,
    SpinnerComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ----- MaterialUI -----
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
