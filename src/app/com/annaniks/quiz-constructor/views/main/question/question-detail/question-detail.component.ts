import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { QuestionService } from '../question.service';
import { QuestionRequestModel, QuestionResponseModel, QuestionAnswerRequest, IQuestionAnswer, QuestionAnswer } from '../question.models';

@Component({
  selector: 'question-detail-view',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
  private _questionForm: FormGroup;
  private _unsubscribe$: Subject<void> = new Subject<void>();
  private _questionId: string;
  public isCreate: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _questionService: QuestionService,
    private _router: Router
  ) {
    this._checkRouteParams();
  }

  ngOnInit() {
    this._formBuilder();
  }

  private _checkRouteParams(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((params: { id: string }) => {
        if (params.id == 'add') {
          this.isCreate = true;
        }
        else {
          this.isCreate = false;
          this._questionId = params.id;
          this._getQuestionById(+this._questionId)
        }
      })
  }

  private _formBuilder(): void {
    this._questionForm = this._fb.group({
      question: ["", Validators.required],
      answers: this._fb.array([new FormControl(null)])
    })
  }

  private _getQuestionById(questionId: number) {
    this._questionService.getQuestionById(questionId).subscribe((data: QuestionResponseModel) => {
      this._setFormValues(data);
    })
  }

  public onClickAdd(): void {
    let formArray = this._questionForm.get('answers') as FormArray;
    formArray.controls.push(new FormControl(null));
  }

  public save(): void {
    if (this._questionForm.valid) {
      if (this.isCreate) {
        this._addQuestion().subscribe((questionId: number) => {
          this._addAnswers(questionId);
        });
      }
    }
  }

  private _addQuestion(): Observable<number> {
    let sendingData: QuestionRequestModel = {
      question: this._questionForm.get('question').value
    }
    return this._questionService.addQuestion(sendingData).pipe(
      map((data: QuestionResponseModel) => {
        return data.id;
      })
    )
  }

  private _addAnswers(question_id: number): void {
    let sendingData: QuestionAnswerRequest = {
      question_id: question_id,
      question_answer: []
    }
    let questionAnswers = [];
    let formArray = this._questionForm.get('answers') as FormArray;
    formArray.controls.map((element: AbstractControl) => {
      questionAnswers.push({ answer: element.value });
    })
    sendingData.question_answer = questionAnswers;
    this._questionService.addAnswerQuestion(sendingData).subscribe(() => {
      this._router.navigate(['/questions']);
    })
  }

  private _setFormValues(data: QuestionResponseModel): void {
    this._questionForm.patchValue({
      question: data.question
    })
    let controlsArray: AbstractControl[] = [];
    data.question_answer.map((element: QuestionAnswer) => {
      controlsArray.push(new FormControl(element.answer))
    })
    let formArray = this._questionForm.get('answers') as FormArray;
    formArray.controls = controlsArray;
  }

  public onClickRemoveAnswer(answerIndex: number): void {
    let formArray = this._questionForm.get('answers') as FormArray;
    formArray.controls.splice(answerIndex, 1);
  }

  get questionForm(): FormGroup {
    return this._questionForm;
  }

  get answersControl(): AbstractControl[] {
    let formArray = this._questionForm.get('answers') as FormArray;
    return formArray.controls;
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
