import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductInterf, ShoppingService } from './shopping.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingResolverService implements Resolve<Array<ProductInterf>> {

    constructor(private shoppingService: ShoppingService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Array<ProductInterf>> | Promise<Array<ProductInterf>> | Array<ProductInterf> {
        return this.shoppingService.shoppingList;
    }
}