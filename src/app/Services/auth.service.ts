import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiKey } from '../Config/config';
import ACTIONS from './loggingActions';
import { LoggingService } from './logging.service';
import { AuthInterf } from '../Interfaces/auth.interfeces';
import { FormGroup } from '@angular/forms';
import { User } from './user.model';
import { tap } from 'rxjs/operators';

interface CredsInterf {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;
  processing = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loggingService: LoggingService
  ) { }

  private createUser(localId: string, email: string, idToken: string, expiresIn: string) {
    const expDate = new Date(new Date().getTime() + +expiresIn * 1000)
    const user = new User(localId, email, idToken, expDate);
  }

  signUp(creds: CredsInterf, form: FormGroup): void {
    this.processing = true;
    this.http.post<AuthInterf>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      ...creds,
      returnSecureToken: true
    }).pipe(tap(resp => this.createUser(
      resp.localId,
      resp.email,
      resp.idToken,
      resp.expiresIn
    ))).subscribe(
      resp => {
        this.processing = false;  
        this.processNotifications('success', resp.email);
        form.reset();
      },
      resp => {
        this.processing = false;
        this.processNotifications(resp.error.error.message);    
      }
    )
  }

  signIn(creds: CredsInterf, form: FormGroup): void {
    this.processing = true;
    this.http.post<AuthInterf>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      ...creds,
      returnSecureToken: true
    }).pipe(tap(resp => this.createUser(
      resp.localId,
      resp.email,
      resp.idToken,
      resp.expiresIn
    ))).subscribe(
      resp => {
        this.processing = false;  
        this.processNotifications('success', resp.email);
        form.reset();
      },
      resp => {
        this.processing = false;
        this.processNotifications(resp.error.error.message);
      }
    )
  }

  signOut(): void {
    this.isAuth = false;
    this.router.navigate(['/authentication']);
  }

  checkAuth(): boolean {
    return this.isAuth;
  }

  processNotifications(respType: string, userEmail?: string): void {
    switch (respType) {
      case ACTIONS.auth.type.emailExists.type:
        this.loggingService.notify(null, null, { message: ACTIONS.auth.type.emailExists.message })
        break;
      case ACTIONS.auth.type.invalidPassword.type:
        this.loggingService.notify(null, null, { message: ACTIONS.auth.type.invalidPassword.message })
        break;
      case ACTIONS.auth.type.weakPassword.type:
        this.loggingService.notify(null, null, { message: ACTIONS.auth.type.weakPassword.message })
        break;
      case ACTIONS.auth.type.emailNotFound.type:
        this.loggingService.notify(null, null, { message: ACTIONS.auth.type.emailNotFound.message })
        break;
      case 'success':
        this.loggingService.notify(null, null, { message: `Welcome ${userEmail}!` })
        break;
      default:
        break;
    }
  }
}
