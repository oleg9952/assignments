import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterf } from 'src/app/app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductInterf;

  @Output() onClone = new EventEmitter<ProductInterf>();
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClone(product: ProductInterf): void {
    this.onClone.emit(product);
  }
  
  handleDelete(productId: string): void {
    this.onDelete.emit(productId);
  }
}
