import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddPurchaseComponent } from './Pages/add-purchase/add-purchase.component';
import { ShoppingListComponent } from './Pages/shopping-list/shopping-list.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { AuthControlsComponent } from './Components/auth-controls/auth-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotificationComponent,
    TabsComponent,
    HomeComponent,
    AddPurchaseComponent,
    ShoppingListComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    EditProductComponent,
    AuthControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
