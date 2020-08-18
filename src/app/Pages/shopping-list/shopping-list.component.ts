import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/Services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  constructor(
    public shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    if (this.shoppingService.shoppingList.length) return;
    this.shoppingService.getProducts();
  }
}
