import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'question-detail-view',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  public questionsDetalisGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this._formBuilder();
  }

  private _formBuilder(): void {
    this.questionsDetalisGroup = new FormBuilder()
      .group({
        question: ["", Validators.required],
      })
  }
}
