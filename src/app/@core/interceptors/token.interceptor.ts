import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  token!: string;

  constructor(
  ) {
  }

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Accept: 'application/json'
      },
    });

    return next.handle(request);
  }
}
