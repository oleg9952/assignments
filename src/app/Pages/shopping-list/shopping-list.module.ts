import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthGuardService } from 'src/app/Services/auth-guard.service';
import { ShoppingResolverService } from 'src/app/Services/shopping-resolver.service';
import { EditDeactivateGuardService } from 'src/app/Services/edit-deactivate-guard.service';

import { ProductResolverService } from 'src/app/Services/product-resolver.service';
import { ShoppingListComponent } from './shopping-list.component';
import { ProductDetailsComponent } from 'src/app/Components/product-details/product-details.component';
import { EditProductComponent } from 'src/app/Components/edit-product/edit-product.component';

const routes: Routes = [
  { 
      path: 'shopping-list', 
      component: ShoppingListComponent,
      canActivate: [AuthGuardService],
      children: [
          { 
              path: ':productId', 
              component: ProductDetailsComponent,
              resolve: {
                  product: ProductResolverService
              }
          },
          { 
              path: ':productId/edit', 
              component: EditProductComponent,
              canDeactivate: [EditDeactivateGuardService]
          }
      ]
  }
];

@NgModule({
  declarations: [
    ShoppingListComponent,
    ProductDetailsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ShoppingListComponent,
    ProductDetailsComponent,
    EditProductComponent
  ]
})
export class ShoppingListModule { }
