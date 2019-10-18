import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionService } from './question.service';
import { IQuestionAnswer } from './question.models';
import { ServerResponse } from '../../../models/models';

@Component({
  selector: 'question-view',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public questions: IQuestionAnswer[] = [];
  public totalRecords: number = null;
  public page: number = null

  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this._getQuestions();
  }

  private _getQuestions(): void {
    this._questionService.getQuestions().pipe(
      takeUntil(this._unsubscribe$)
    )
      .subscribe((data: ServerResponse<IQuestionAnswer[]>) => {
        this.questions = data.results;
        this.totalRecords = data.count
      })
  }

  private _getQuestionsWithParams(page) {
    this._questionService.getQuestionsWithParams(page).pipe(
      takeUntil(this._unsubscribe$)
    ).subscribe(data => {
      console.log(8888888888,data);
      
      this.questions = data.results
    })
  }

  public paginate(event: { page: number }) {
    let page = event.page;
    this._getQuestionsWithParams(page)
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  
}
