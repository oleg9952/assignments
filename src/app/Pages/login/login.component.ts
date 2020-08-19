import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  action = 0;
  // 0 = login
  // 1 = register

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  submitForm(): void {
    if (!this.form.valid) return;
    if (this.action) {
      this.authService.signUp(this.form.value, this.form);
      return;
    }
    this.authService.signIn(this.form.value, this.form);
  }

  formAction(action: number): void {
    this.action = action;
  }

}
