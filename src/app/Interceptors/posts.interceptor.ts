import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PostsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const customReq = req.clone({
            headers: req.headers.append('***CUSTOM-HEADER***', '***CUSTOM-HEADER***')
        });
        console.log('Request intercepted');
        return next.handle(customReq);
    }
}