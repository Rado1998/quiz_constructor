
import { environment } from '../../../../../environments/environment.prod';

const API_URL = environment.API_URL;
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class ApiInterceptors implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes(API_URL)) {
      return next.handle(req);
    }
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-type", "aplication/json")
      })
    }
    return next.handle(req).pipe()
  }
}