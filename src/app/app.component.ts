import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormDataInterf } from './Components/form/form.component';

export interface ProductInterf {
  id: string;
  name: string;
  amount: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoppingList: Array<ProductInterf> = [];

  addNewProduct(product: FormDataInterf): void {
    this.shoppingList.push(<ProductInterf>{
      ...product,
      id: uuidv4()
    });
  }

  cloneProduct(product: ProductInterf): void {
    this.addNewProduct(product);
  }

  deleteProduct(productId: string): void {
    const index = this.shoppingList.findIndex((prod: ProductInterf) => prod.id === productId);
    if (index === -1) return;
    this.shoppingList.splice(index, 1);
  }
}
