import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';
import { Router } from '@angular/router';



@Component({
  selector: 'question-view',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  response: Observable<any> | any;
  constructor(private _uestionService: QuestionService,private _router:Router) { }

  ngOnInit() {
  }

  getQuestions() {
    this.response = this._uestionService.gets('answers/').pipe(  )
      .subscribe(data => console.log(data))
  }

 public openQuestionDetailPage(){
   this._router.navigate(['/questions/1'])
   
 }

}
