import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from './question.service';


@Component({
  selector: 'question-view',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  response: Observable<any> | any;
  constructor(private _uestionService: QuestionService) { }

  ngOnInit() {
  }
  getQuestions() {

    this.response = this._uestionService.gets('answers/').pipe(  )
      .subscribe(data => console.log(data))
  }

}
