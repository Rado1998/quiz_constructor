import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetTokenResponse } from '../models/models';

@Injectable()
export class GuardService {
    constructor(
        private _cookieService: CookieService,
        private _httpClient: HttpClient,
        private _router: Router
    ) {
    }

    public checkAccessToken(): Observable<boolean> {
        let accessToken = this._cookieService.get('accessToken') || '';
        if (!accessToken) {
            return this._getAccessToken();
        }
        return this._httpClient.get('token/check').pipe(
            map((data) => {
                return true
            },
                catchError((err, caught) => this._getAccessToken())
            )
        )
    }

    private _getAccessToken(): Observable<boolean> {
        let refreshToken = this._cookieService.get('refreshToken') || '';
        if (!refreshToken) {
            this._router.navigate(['/auth/login']);
            return of(false);
        }
        return this._httpClient.post<GetTokenResponse>('token/refresh', { 'refresh': refreshToken }).pipe(
            map((data) => {
                this._cookieService.put('accessToken', data.access);
                return true
            }),
            catchError((err, caught) => {
                return of(false);
            })
        )
    }
}