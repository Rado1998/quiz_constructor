import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ServerResponse } from '../../../models/models';
import { IQuestionAnswer, QuestionRequestModel, QuestionResponseModel, QuestionAnswerRequest, EmptyResponse, QuestionCombinationRequest, QuestionCombinationResponse } from './question.models';

@Injectable()
export class QuestionService {
    private _disableQuestion: Subject<boolean> = new Subject<boolean>();
    private _disableQuestionState: Observable<boolean>;

    constructor(private _httpClient: HttpClient) {
        this._disableQuestionState = this._disableQuestion.asObservable();
    }

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

    public getQuestionsWithParams(params: object): Observable<ServerResponse<IQuestionAnswer[]>> {
        let requestParams = new HttpParams();
        Object.keys(params).map((element) => {
            requestParams = requestParams.set(element, String(params[element]));
        })
        return this._httpClient.get<ServerResponse<IQuestionAnswer[]>>('questions', { params: requestParams });
    }

    public getNextQuestion(answers: string, questions: string): Observable<any> {
        return this._httpClient.get(`next-question/${answers}/${questions}`);
    }

    public setDisableQuestionState(isDisabled: boolean): void {
        this._disableQuestion.next(isDisabled);
    }

    public getDisableQuestionState(): Observable<boolean> {
        return this._disableQuestionState;
    }
}