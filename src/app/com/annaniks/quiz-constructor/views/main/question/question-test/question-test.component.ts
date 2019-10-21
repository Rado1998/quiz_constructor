import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../question.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IQuestionAnswer, QuestionResponseModel } from '../question.models';
import { ServerResponse } from '../../../../models/models';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { LoadingService } from '../../../../services';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../../../../shared/components/alert-modal/alert-modal.component';

@Component({
  selector: 'app-question-test',
  templateUrl: './question-test.component.html',
  styleUrls: ['./question-test.component.scss']
})
export class QuestionTestComponent implements OnInit, OnDestroy {
  private _questionTestForm: FormGroup;
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public questions: IQuestionAnswer[] = [];

  constructor(
    private _fb: FormBuilder,
    private _questionService: QuestionService,
    private _loadingService: LoadingService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._formBuilder();
    this._getFirstQuestion();
  }

  private _formBuilder(): void {
    this._questionTestForm = this._fb.group({
      questions: this._fb.array([])
    })
  }

  private _getFirstQuestion(): void {
    this._loadingService.setLoadingState(true);
    this._questionService.getQuestionsWithParams({ is_begin: true })
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(
        (data: ServerResponse<IQuestionAnswer[]>) => {
          if (data && data.results && data.results[0]) {
            const question = data.results[0];
            this.questions.push(question);
            let formArray: FormArray = this._questionTestForm.get('questions') as FormArray;
            formArray.controls.push(this._fb.group({
              question: new FormControl(question.id),
              selectedValue: new FormControl(null)
            }))
          }
        },
        (err) => { },
        () => {
          this._loadingService.setLoadingState(false);
        })
  }

  public saveAnswer(): void {
    this._loadingService.setLoadingState(true);
    let answers: string = '';
    let questions: number[] = [];
    const formArray = this._questionTestForm.get('questions') as FormArray;
    formArray.controls.map((element: FormGroup, index: number) => {
      answers += element.get('selectedValue').value;
      questions.push(element.get('question').value);
    })
    this._questionService.setDisableQuestionState(true);
    this._questionService.getNextQuestion(answers, questions.join(',')).subscribe(
      (data) => {
        if (data.message) {
          this._questionService.getQuestionById(data.message.id).subscribe((question: QuestionResponseModel) => {
            this.questions.push(question);
            let formArray: FormArray = this._questionTestForm.get('questions') as FormArray;
            formArray.controls.push(this._fb.group({
              question: new FormControl(question.id),
              selectedValue: new FormControl(null)
            }))
          })
        } else {
          this._openMessageDialog()
        }
      },
      (err) => { this._loadingService.setLoadingState(false); },
      () => {
        this._loadingService.setLoadingState(false);
      })
  }

  private _openMessageDialog(): void {
    const dialogRef = this._dialog.open(AlertModalComponent, {
      width: '250px',
      data: { message: 'There are not questions for this combination,you have completed the quiz' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  get questionTestForm(): FormGroup {
    return this._questionTestForm
  }

  get questionControls(): AbstractControl[] {
    let formArray: FormArray = this._questionTestForm.get('questions') as FormArray;
    return formArray.controls;
  }

}
