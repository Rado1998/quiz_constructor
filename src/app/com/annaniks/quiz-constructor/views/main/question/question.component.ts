import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from './question.service';


@Component({
  selector: 'question-view',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  public questions: any= [];
  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions()
  }
  getQuestions() {
    this._questionService.getQuestion('questions')
      .subscribe(data => {
        this.questions = data['results']
      })
  }

  ngOnDestroy(){}

}
