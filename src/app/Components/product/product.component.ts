import { Component, OnInit, Input } from '@angular/core';
import { ShoppingService, ProductInterf } from 'src/app/Services/shopping.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductInterf;

  editInput: boolean = false;

  constructor(public shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  handleEdit(productId: string, productName: string): void {
    this.editInput = !this.editInput;
    this.shoppingService.editProduct(productId, productName);
  }
}