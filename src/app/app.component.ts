import { Component, ViewChild } from '@angular/core';
import { NgForm  } from '@angular/forms';

interface FormDataInterf {
  name: string;
  email: string;
  stack: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  submitedData: FormDataInterf;

  onSubmit(): void {
    this.submitedData = this.form.value;
    this.form.reset({
      stack: 'angular'
    });
  }
}