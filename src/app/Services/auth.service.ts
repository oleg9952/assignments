import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;

  constructor(
    private router: Router
  ) { }

  signIn(): void {
    this.isAuth = true;
  }

  signOut(): void {
    this.isAuth = false;
    this.router.navigate(['/authentication']);
  }

  checkAuth(): boolean {
    return this.isAuth;
  }
}
