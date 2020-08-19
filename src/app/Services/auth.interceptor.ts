import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { User } from './user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userFromStorage = this.localStorageService.getItem('user');
    
    if (!userFromStorage) return next.handle(request);
    
    const { id, email, _token, tokenExpDate } = userFromStorage;
    const user = new User(id, email, _token, tokenExpDate);

    const newRequest = request.clone({
      params: new HttpParams().set('auth', user.token)
    })
    
    return next.handle(newRequest);
  }
}
