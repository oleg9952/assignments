import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { ProductComponent } from './Components/product/product.component';
import { NotificationComponent } from './Components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
