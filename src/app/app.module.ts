import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddPurchaseComponent } from './Pages/add-purchase/add-purchase.component';
import { ShoppingListComponent } from './Pages/shopping-list/shopping-list.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-purchase', component: AddPurchaseComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'product/:productId', component: ProductPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotificationComponent,
    TabsComponent,
    HomeComponent,
    AddPurchaseComponent,
    ShoppingListComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
