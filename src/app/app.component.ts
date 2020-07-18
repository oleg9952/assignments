import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './Validators/custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  get controls() {
    return (this.form.get('otherFrameworks') as FormArray).controls;
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        CustomValidators.prohibitedName
      ], CustomValidators.prohibitedNameAsync),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      framework: new FormControl('angular'),
      otherFrameworks: new FormArray([])
    });
  }

  submitForm(): void {
    console.log(this.form);
  }

  onAddFramework(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('otherFrameworks')).push(control)
    console.log(this.controls)
  }
}
