import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingService, ProductInterf } from 'src/app/Services/shopping.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  sub: any;
  product: ProductInterf;

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.product = this.shoppingService.getProductById(params.productId);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
