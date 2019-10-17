import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { GuardService } from './guard.service';

export class AuthGuard implements CanActivate {
    constructor(
        private _cookieService: CookieService,
        private _router: Router,
        public _guardService: GuardService
    ) { }

    canActivate(): Observable<boolean> | boolean {
         return this._guardService.checkAccessToken()
    }

}