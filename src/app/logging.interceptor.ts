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
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Outoging Requests : ");
    console.log(request.url);
    console.log(request.headers);
    return next.handle(request).pipe(tap(event => {
      if(event.type == HttpEventType.Response){
        console.log("Incoming Reponse");
        console.log(request.body);
      }
    }));
  }
}
