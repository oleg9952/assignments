import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShoppingListModule } from './Pages/shopping-list/shopping-list.module';
import { AuthInterceptor } from './Services/auth.interceptor'

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddPurchaseComponent } from './Pages/add-purchase/add-purchase.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { AuthControlsComponent } from './Components/auth-controls/auth-controls.component';
import { LoginComponent } from './Pages/login/login.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotificationComponent,
    TabsComponent,
    HomeComponent,
    AddPurchaseComponent,
    NotFoundComponent,
    AuthControlsComponent,
    LoginComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShoppingListModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
