import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService{
    constructor(private _httpClient: HttpClient){}

    public getQuestion(url)  {
        return this._httpClient.get(url);
    }
}