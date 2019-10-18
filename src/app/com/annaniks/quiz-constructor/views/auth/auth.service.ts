import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseModel, LoginRequestModel } from './auth.models';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private _httpClient: HttpClient,
        ) { }

    public login(data: LoginRequestModel): Observable<LoginResponseModel> {
        return this._httpClient.post<LoginResponseModel>('token', data);
    }
    
}