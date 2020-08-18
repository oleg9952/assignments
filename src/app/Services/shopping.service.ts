import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDataInterf } from '../Components/form/form.component';
import { LoggingService } from './logging.service';
import ACTIONS from './loggingActions';

export interface ProductInterf {
  id: string;
  name: string;
  amount: number,
  ref: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  dataProviderSubject: Subject<Array<ProductInterf>> = new Subject();

  shoppingList: Array<ProductInterf> = [];

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) { }

  getProducts(): void {
    this.http.get('https://angular-final-task.firebaseio.com/products.json')
      .pipe(
        map((resp: any) => {
          const products: Array<ProductInterf> = [];
          for(const key in resp) {
            if (resp.hasOwnProperty(key)) {
              const ref = Object.keys(resp[key])[0];
              products.push({
                ...resp[key][ref],
                ref,
                id: key
              })
            }
          }
          return products;
        })
      ).subscribe(
        (products: Array<ProductInterf>) => {
          this.shoppingList = products;
          this.dataProviderSubject.next(this.shoppingList);
        },
        (error) => this.loggingService.notify(null, null, error.message)
      )
  }

  getProductById(id: string): ProductInterf {
    return this.shoppingList.find((product: ProductInterf) => product.id === id);
  }

  addNewProduct(product: FormDataInterf): void {
    this.http.post(`https://angular-final-task.firebaseio.com/products/${uuidv4()}.json`, product).subscribe(
      () => {
        this.getProducts();
        this.loggingService.notify(product.name, ACTIONS.add.type);
      },
      (error) => this.loggingService.notify(null, null, error.message)
    )
  }

  deleteProduct(productId: string): void {
    this.http.delete(`https://angular-final-task.firebaseio.com/products/${productId}.json`).subscribe(
      () => {
        this.loggingService.notify(this.getProductById(productId).name, ACTIONS.delete.type);
        this.getProducts();
      },
      (error) => this.loggingService.notify(null, null, error.message)
    )
  }

  editProduct(productId: string, ref: string, productName: string, product: ProductInterf): void {
    this.http.put(`https://angular-final-task.firebaseio.com/products/${productId}/${ref}.json`, {
      name: productName,
      amount: product.amount
    }).subscribe(
      () => {
        this.loggingService.notify(productName, ACTIONS.edit.type);
        this.getProducts();
      }
    );
  }

}
