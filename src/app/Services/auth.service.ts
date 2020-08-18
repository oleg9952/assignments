import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;

  constructor() { }

  signIn(): void {
    this.isAuth = true;
  }

  signOut(): void {
    this.isAuth = false;
  }

  checkAuth(): boolean {
    return this.isAuth;
  }
}
