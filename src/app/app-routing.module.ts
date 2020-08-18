import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AddPurchaseComponent } from './Pages/add-purchase/add-purchase.component';
import { ShoppingListComponent } from './Pages/shopping-list/shopping-list.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { ShoppingResolverService } from './Services/shopping-resolver.service';
import { ProductResolverService } from './Services/product-resolver.service';
import { EditDeactivateGuardService } from './Services/edit-deactivate-guard.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-purchase', component: AddPurchaseComponent },
    { 
        path: 'shopping-list', 
        component: ShoppingListComponent,
        canActivate: [AuthGuardService],
        resolve: {
            shoppingList: ShoppingResolverService
        }, 
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
    },
    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }