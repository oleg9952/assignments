import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

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
  @Output() onNewProduct = new EventEmitter<FormDataInterf>();

  @ViewChild('productName') productName;
  @ViewChild('productAmount') productAmount;

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: any): void {
    e.preventDefault();

    const form = e.currentTarget;
    const data: FormDataInterf = {
      name: this.productName.nativeElement.value,
      amount: parseInt(this.productAmount.nativeElement.value)
    }

    this.onNewProduct.emit(data);

    form.reset();
  }
}
