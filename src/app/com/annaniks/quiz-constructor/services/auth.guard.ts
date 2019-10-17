import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

export class AuthGuard implements CanActivate {
    constructor(
        public _guardService: GuardService
    ) { }

    canActivate(): Observable<boolean> | boolean | Promise<boolean> {
        return this._guardService.checkAccessToken()
    }

}