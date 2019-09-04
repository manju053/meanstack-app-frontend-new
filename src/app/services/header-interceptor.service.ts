import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authToken = this._auth.getAuthorizationToken()

    if(authToken) {
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + authToken)
        })
      )
    }
    return next.handle(req);
  }
}
