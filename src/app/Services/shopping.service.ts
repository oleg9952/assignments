import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormDataInterf } from '../Components/form/form.component';
import { LoggingService } from './logging.service';
import ACTIONS from './loggingActions';

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
      name: 'Tomato',
      amount: 3
    },
    {
      id: '2',
      name: 'Potato',
      amount: 6
    },
    {
      id: '3',
      name: 'Cucumber',
      amount: 2
    },
    {
      id: '4',
      name: 'Cabbage',
      amount: 3
    },
    {
      id: '5',
      name: 'Apple',
      amount: 1
    },
    {
      id: '6',
      name: 'Strawberry',
      amount: 8
    }
  ];

  constructor(private loggingService: LoggingService) { }

  addNewProduct(product: FormDataInterf, cloning?: boolean): void {
    this.shoppingList.push(<ProductInterf>{
      ...product,
      id: uuidv4()
    });
    if (cloning) return;
    this.loggingService.notify(product.name, ACTIONS.add.type);
  }

  cloneProduct(product: ProductInterf): void {
    this.addNewProduct(product, true);
    this.loggingService.notify(product.name, ACTIONS.clone.type);
  }

  deleteProduct(productId: string): void {
    const index = this.shoppingList.findIndex((prod: ProductInterf) => prod.id === productId);
    if (index === -1) return;
    this.loggingService.notify(this.shoppingList[index].name, ACTIONS.delete.type);
    this.shoppingList.splice(index, 1);
  }

  editProduct(productId: string, productName: string): void {
    for (const product of this.shoppingList) {
      if (product.id === productId) {
        product.name = productName;
        this.loggingService.notify(productName, ACTIONS.edit.type);
      }
    }
  }
}
