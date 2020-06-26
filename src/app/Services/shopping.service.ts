import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormDataInterf } from '../Components/form/form.component';
import { LoggingService } from './logging.service';

export interface ProductInterf {
  id: string;
  name: string;
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingList: Array<ProductInterf> = [
    {
      id: '1',
      name: 'sdasd',
      amount: 2
    }
  ];

  constructor(private loggingService: LoggingService) { }

  addNewProduct(product: FormDataInterf, cloning?: boolean): void {
    this.shoppingList.push(<ProductInterf>{
      ...product,
      id: uuidv4()
    });
    if (cloning) return;
    this.loggingService.notifyAdd(product.name);
  }

  cloneProduct(product: ProductInterf): void {
    this.addNewProduct(product, true);
    this.loggingService.notifyClone(product.name);
  }

  deleteProduct(productId: string): void {
    const index = this.shoppingList.findIndex((prod: ProductInterf) => prod.id === productId);
    if (index === -1) return;
    this.loggingService.notifyDelete(this.shoppingList[index].name);
    this.shoppingList.splice(index, 1);
  }

  editProduct(productId: string, productName: string): void {
    for (const product of this.shoppingList) {
      if (product.id === productId) {
        product.name = productName;
        this.loggingService.notifyEdit(productName);
      }
    }
  }
}
