import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {
    constructor(private _httpClient: HttpClient) { }

    public getQuestions(): Observable<any> {
        return this._httpClient.get('questions');
    }
}