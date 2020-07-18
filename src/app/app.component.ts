import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  
  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        CustomValidators.prohibitedName
      ], CustomValidators.prohibitedNameAsync.bind(this)),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      framework: new FormControl('angular')
    })
  }

  submitForm(): void {
    console.log(this.form)
  }


}
