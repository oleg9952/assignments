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
  allowEdit: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.product = this.shoppingService.getProductById(params.productId);
    })
    this.queryParamsSub = this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = +params.allowEdit;
    })
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.queryParamsSub.unsubscribe();
  }

  handleSubmit(e: Event): void {
    e.preventDefault();
    const form: any = e.currentTarget;
    this.shoppingService.editProduct(this.product.id, form.newName.value);
    form.reset();
    this.router.navigate(['../'], {
      relativeTo: this.route,
      preserveQueryParams: true
    })
  }

}
