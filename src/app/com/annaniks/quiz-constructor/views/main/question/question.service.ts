import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../../../models/models';
import { IQuestionAnswer } from './questions.models';

@Injectable()
export class QuestionService {
    constructor(private _httpClient: HttpClient) { }

    public getQuestions(): Observable<ServerResponse<IQuestionAnswer[]>> {
        return this._httpClient.get<ServerResponse<IQuestionAnswer[]>>('questions');
    }
}