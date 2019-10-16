
import { environment } from '../../../../../environments/environment.prod';

const API_URL = environment.API_URL;
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

export class ApiInterceptor implements HttpInterceptor {

  constructor(private _cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (req.url != '/api-token-auth')
      headers = headers.append('Authorization', 'Bearer ' + this._cookieService.get('accessToken'))
    const clonedRequest = req.clone({
      headers: headers, url: `${API_URL}${req.url}/`
    });
    return next.handle(clonedRequest)
  }
}