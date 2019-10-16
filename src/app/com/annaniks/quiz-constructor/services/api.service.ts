import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.API_URL;

@Injectable()
export class ApiService{

    constructor(private http: HttpClient){
    }

    public get(url: string){
        return this.http.get(API_URL+url)
    }
    
}