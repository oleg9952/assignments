import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingService, ProductInterf } from 'src/app/Services/shopping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  routeSub: any;

  product: ProductInterf;
  cardNav: boolean = false;
  editInput: boolean = false;

  constructor(
    public shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.product = this.shoppingService.shoppingList.find((prod: ProductInterf) => {
        if (params.productId === prod.id) {
          return prod;
        }
      })
    })
    if (this.product) return;
    this.router.navigate(['/shopping-list']);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }


  toggleNav(): void {
    this.cardNav = !this.cardNav;
    if (!this.editInput) return;
    this.toggleEditInput();
  }

  toggleEditInput(): void {
    this.editInput = !this.editInput;
  }

  handleEdit(productName: string): void {
    if (this.editInput) {
      this.shoppingService.editProduct(this.product.id, productName);
      this.toggleEditInput();
    } else {
      this.toggleEditInput();
    }
  }

  handleCloning(currentProduct: ProductInterf): void {
    this.shoppingService.cloneProduct(currentProduct);
    this.toggleNav();
  }

  handleDelete(productId: string): void {
    this.router.navigate(['/shopping-list']);
    this.shoppingService.deleteProduct(productId);
  }

}
