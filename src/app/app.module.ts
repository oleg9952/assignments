import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FocusDirective } from './Directives/focus.directive';
import { DStyleDirective } from './Directives/d-style.directive';
import { HideDirective } from './Directives/hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    DStyleDirective,
    HideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
