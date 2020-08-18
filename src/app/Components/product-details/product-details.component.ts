import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private router: Router,
    public shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((params: Params) => {
      this.product = params.product;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goToEdit(): void {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }

  onDelete(): void {
    this.shoppingService.deleteProduct(this.product.id);
    this.router.navigate(['shopping-list'])
  }

}
