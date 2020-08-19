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
import { LocalStorageService } from './local-storage.service';

interface CredsInterf {
  email: string;
  password: string;
}

interface UserInterf {
  id: 'string';
  email: string;
  _token: string;
  tokenExpDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  processing = false;
  timer: any = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loggingService: LoggingService,
    private localStorageService: LocalStorageService
  ) { }

  private createUser(localId: string, email: string, idToken: string, expiresIn: string) {
    const expDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(localId, email, idToken, expDate);
    this.localStorageService.setItem('user', user);
  }

  signUp(creds: CredsInterf, form: FormGroup): void {
    this.processing = true;
    this.http.post<AuthInterf>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      ...creds,
      returnSecureToken: true
    })
    .pipe(tap(resp => this.createUser(resp.localId, resp.email, resp.idToken, resp.expiresIn)))
    .subscribe(
      resp => {
        this.processing = false;  
        this.processNotifications('success', resp.email);
        form.reset();
        this.autoSignOut();
        this.router.navigate(['']);
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
    })
    .pipe(tap(resp => this.createUser(resp.localId, resp.email, resp.idToken, resp.expiresIn)))
    .subscribe(
      resp => {
        this.processing = false;  
        this.processNotifications('success', resp.email);
        form.reset();
        this.autoSignOut();
        this.router.navigate(['']);
      },
      resp => {
        this.processing = false;
        this.processNotifications(resp.error.error.message);
      }
    )
  }

  signOut(): void {
    this.localStorageService.removeItem('user');
    clearTimeout(this.timer);
    this.timer = null;
    this.router.navigate(['/authentication']);
  }

  checkAuth(): boolean {
    const user: UserInterf = this.localStorageService.getItem('user');
    if (user && new Date() < new Date(user.tokenExpDate)) return true;
    this.localStorageService.removeItem('user');
    return false;
  }

  autoSignOut(): void {
    const user: UserInterf = this.localStorageService.getItem('user');
    if (user && new Date() < new Date(user.tokenExpDate)) {
      const time = new Date(user.tokenExpDate).getTime() - new Date().getTime();
      this.timer = setTimeout(() => {
        this.signOut();
      }, time);
    }
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
      case ACTIONS.auth.type.invalidEmail.type:
        this.loggingService.notify(null, null, { message: ACTIONS.auth.type.invalidEmail.message })
        break;
      case 'success':
        this.loggingService.notify(null, null, { message: `Welcome ${userEmail}!` })
        break;
      default:
        break;
    }
  }
}
