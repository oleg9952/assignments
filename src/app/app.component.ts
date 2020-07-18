import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './Validators/custom.validators';

interface FormOutput {
  name: string;
  email: string;
  framework: string;
  otherFrameworks: Array<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  formOutput: FormOutput;

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
    this.formOutput = this.form.value;
    this.form.reset({
      framework: 'angular'
    });
  }

  onAddFramework(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('otherFrameworks')).push(control);
  }
}
