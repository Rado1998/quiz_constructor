import { Component, OnInit, OnDestroy } from '@angular/core';

import { QuestionService } from './question.service';
import { IQuestionAnswers } from './questions.models';
import { Subject } from 'rxjs';

@Component({
  selector: 'question-view',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>()
  public questions: IQuestionAnswers[] = [];
  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions()
  }
  getQuestions(){
    this._questionService.getQuestion('questions')
      .subscribe((data: IQuestionAnswers) => {
        this.questions = data['results']
        console.log(this.questions)
      })
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }

}
