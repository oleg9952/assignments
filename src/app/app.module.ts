import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddComponent } from './Components/odd/odd.component';
import { EvenComponent } from './Components/even/even.component';
import { ControlsComponent } from './Components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
