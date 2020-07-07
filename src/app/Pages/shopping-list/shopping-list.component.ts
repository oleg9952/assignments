import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductInterf } from 'src/app/Services/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  sub: any;

  shoppingList: Array<ProductInterf>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((params: Params) => {
      this.shoppingList = params.shoppingList;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
