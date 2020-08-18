import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService, ProductInterf } from 'src/app/Services/shopping.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {
  paramsSub: any;
  queryParamsSub: any;

  product: ProductInterf;
  productName: string = '';
  productNamePrev: string;

  // allowEdit: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.product = this.shoppingService.getProductById(params.productId);
      if (this.productNamePrev) return;
      this.productNamePrev = this.product.name;
    })
    // this.queryParamsSub = this.route.queryParams.subscribe((params: Params) => {
    //   this.allowEdit = +params.allowEdit;
    // })
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    // this.queryParamsSub.unsubscribe();
  }

  handleSubmit(e: Event): void {
    e.preventDefault();
    if (!this.productName.length || !this.productName.trim().length) return;
    this.shoppingService.editProduct(this.product.id, this.productName);
    this.router.navigate(['../'], {
      relativeTo: this.route,
      // preserveQueryParams: true
    })
  }

  canDeactivate(): boolean {
    // if (!this.allowEdit) return true;
    if (this.productName !== this.productNamePrev) {
      const question = confirm('Are you shure you want to leave?');
      if (!question) return false;
      this.productNamePrev = this.productName;
      return question;
    }
    return true;
  }

}
