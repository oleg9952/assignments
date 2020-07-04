import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddPurchaseComponent } from './Pages/add-purchase/add-purchase.component';
import { ShoppingListComponent } from './Pages/shopping-list/shopping-list.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotificationComponent,
    TabsComponent,
    HomeComponent,
    AddPurchaseComponent,
    ShoppingListComponent,
    ProductPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
