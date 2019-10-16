import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseModel, LoginRequestModel } from './auth.models';

@Injectable()
export class AuthService {

    constructor(private _httpClient: HttpClient) { }

    public login(data: LoginRequestModel): Observable<LoginResponseModel> {
        return this._httpClient.post<LoginResponseModel>('api-token-auth', data);
    }

    
}