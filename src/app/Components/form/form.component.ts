import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/Services/shopping.service';

export interface FormDataInterf {
  name: string;
  amount: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('productName') productName;
  @ViewChild('productAmount') productAmount;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  handleSubmit(e: any): void {
    e.preventDefault();

    const form = e.currentTarget;
    const data: FormDataInterf = {
      name: this.productName.nativeElement.value,
      amount: parseInt(this.productAmount.nativeElement.value)
    }

    this.shoppingService.addNewProduct(data);

    form.reset();
  }
}
