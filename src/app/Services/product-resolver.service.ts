import { Injectable } from '@angular/core';
import { ShoppingService, ProductInterf } from './shopping.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductResolverService implements Resolve<ProductInterf> {
    
    constructor(private shoppingService: ShoppingService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ProductInterf> | Promise<ProductInterf> | ProductInterf {
        return this.shoppingService.getProductById(route.params.productId);
    }
}