import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request is on its way!");
    console.log(request.url)
    const modifiedRequest = request.clone({setHeaders: {Auth : 'xyz'}
    });
    return next.handle(modifiedRequest).pipe(tap(event => {
      console.log(event);
      if(event.type == HttpEventType.Response){
        console.log('Requeste arrived, body data: ',event.body)
        console.log();
      }
    }));
  }
}
