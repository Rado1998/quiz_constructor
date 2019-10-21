import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../../../models/models';
import { IQuestionAnswer, QuestionRequestModel, QuestionResponseModel, QuestionAnswerRequest, EmptyResponse, QuestionCombinationRequest, QuestionCombinationResponse } from './question.models';

@Injectable()
export class QuestionService {
    constructor(private _httpClient: HttpClient) { }

    public getQuestions(): Observable<ServerResponse<IQuestionAnswer[]>> {
        return this._httpClient.get<ServerResponse<IQuestionAnswer[]>>('questions');
    }

    public addQuestion(body: QuestionRequestModel): Observable<QuestionResponseModel> {
        return this._httpClient.post<QuestionResponseModel>('questions', body)
    }

    public addAnswerQuestion(body: QuestionAnswerRequest): Observable<EmptyResponse> {
        return this._httpClient.post<EmptyResponse>('add_question', body);
    }

    public getQuestionById(questionId: number): Observable<QuestionResponseModel> {
        return this._httpClient.get<QuestionResponseModel>(`questions/${questionId}`);
    }

    public setQuestionCombination(body: QuestionCombinationRequest): Observable<QuestionCombinationResponse> {
        return this._httpClient.post<QuestionCombinationResponse>('combinations', body);
    }

    public getQuestionsWithParams(page: number, limit: number = 10): Observable<ServerResponse<IQuestionAnswer[]>> {
        let params = new HttpParams();
        params = params.set('offset', String(limit * page));
        params = params.set('limit', String(limit));
        return this._httpClient.get<ServerResponse<IQuestionAnswer[]>>('questions', { params: params });
    }
}