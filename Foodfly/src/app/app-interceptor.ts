import { Injectable, Provider,  } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const user = this.userService.user;
    if (user && user.accessToken) {
      const modifiedRequest = request.clone({
        headers: new HttpHeaders().set('X-Authorization', user.accessToken),
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
export const AuthorizationInterceptorProvider: Provider = {
    multi: true,
    useClass: AuthorizationInterceptor,
    provide: HTTP_INTERCEPTORS,
  };
