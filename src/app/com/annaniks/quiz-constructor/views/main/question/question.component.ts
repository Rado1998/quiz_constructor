import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionService } from './question.service';
import { IQuestionAnswer } from './question.models';
import { ServerResponse } from '../../../models/models';
import { LoadingService } from '../../../services';

@Component({
  selector: 'question-view',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public questions: IQuestionAnswer[] = [];
  public totalRecords: number = 0;
  public page: number = 0
  public limit: number = 10;

  constructor(
    private _loadingService: LoadingService,
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this._getQuestionsWithParams(this.page);
  }

  private _getQuestionsWithParams(page: number): void {
    this._loadingService.setLoadingState(true);
    this._questionService.getQuestionsWithParams(page).pipe(
      takeUntil(this._unsubscribe$)
    ).subscribe((data: ServerResponse<IQuestionAnswer[]>) => {
      this.questions = data.results;
      this.totalRecords = data.count;
    },
      (err) => { },
      () => {
        this._loadingService.setLoadingState(false);
      })
  }

  public paginate(event: { page: number }) {
    let page = event.page;
    this._getQuestionsWithParams(page);
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
