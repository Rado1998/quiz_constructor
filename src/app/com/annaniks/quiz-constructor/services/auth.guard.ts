import { CanActivate, Router } from '@angular/router';
import { Observable, interval, timer } from 'rxjs';
import { CookieService } from 'ngx-cookie';

export class AuthGuard implements CanActivate {
    constructor(private _cookieService: CookieService,
        private _router: Router
        ){}

    canActivate(): Observable<boolean> | boolean {
        let accessToken = this._cookieService.get('accessToken');
        if(accessToken){
            return true
        }else{
            this._router.navigate(['/auth/login'])
            return false
        }
    }


}