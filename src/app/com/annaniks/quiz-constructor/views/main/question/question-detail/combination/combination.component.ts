import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { QuestionService } from '../../question.service';
import { IQuestionAnswer, QuestionCombinationRequest } from '../../question.models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServerResponse } from '../../../../../models/models';
import { ITreeSelectData, ITreeSelectChild } from '../../../../../components/tree-select/tree-select.models';
import { FormGroup, FormBuilder, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/com/annaniks/quiz-constructor/services';

@Component({
    selector: 'combination-view',
    templateUrl: 'combination.component.html',
    styleUrls: ['combination.component.scss']
})
export class CombinationComponent implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    private _questions: IQuestionAnswer[] = [];
    public treeSelectData: ITreeSelectData[] = [];
    private _combinationForm: FormGroup;
    private _questionId: string = '';
    constructor(
        private _questionService: QuestionService,
        private _fb: FormBuilder,
        @Inject('BASE_URL') private _baseUrl: string,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _loadingService: LoadingService
    ) { }

    ngOnInit() {
        this._formBuilder();
        this._getQuestions();
        this._questionId = this._activatedRoute.snapshot.paramMap.get('id');
    }

    private _formBuilder(): void {
        this._combinationForm = this._fb.group({
            values: this._fb.array([]),
        })
    }

    private _getQuestions(): void {
        this._loadingService.setLoadingState(true);
        this._questionService.getQuestionsWithParams(0, 1000000000000)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe(
                (data: ServerResponse<IQuestionAnswer[]>) => {
                    this._questions = data.results;
                    this._setTreeSelectData(this._questions);
                }, (err) => { },
                () => {
                    this._loadingService.setLoadingState(false);
                })
    }

    private _setTreeSelectData(data: IQuestionAnswer[]): void {
        let formArray = this._combinationForm.get('values') as FormArray;
        let controlArr: AbstractControl[] = [];
        this.treeSelectData = data.map((element: IQuestionAnswer) => {
            controlArr.push(new FormControl(null));
            let treeSelectItem: ITreeSelectData = {} as ITreeSelectData;
            treeSelectItem.header = element.question;
            treeSelectItem.childrens = element.question_answer.map((el) => {
                let treeSelectChild: ITreeSelectChild = {} as ITreeSelectChild;
                treeSelectChild.label = el.answer;
                treeSelectChild.id = el.id;
                return treeSelectChild;
            })
            return treeSelectItem;
        })
        formArray.controls = controlArr;
    }

    public save(): void {
        if (this._combinationForm.valid) {
            this._loadingService.setLoadingState(true);
            let selectedAnswers = this._getSelectedAnswers();
            let sendingData: QuestionCombinationRequest = {
                answers: selectedAnswers,
                question: `${this._baseUrl}questions/${this._questionId}/`
            }
            this._questionService.setQuestionCombination(sendingData)
                .pipe(takeUntil(this._unsubscribe$))
                .subscribe(
                    (response) => {
                        this._router.navigate(['/questions']);
                    },
                    (err) => { },
                    () => {
                        this._loadingService.setLoadingState(false);
                    })
        }
    }

    private _getSelectedAnswers(): string {
        let formArray = this._combinationForm.get('values') as FormArray;
        let selectedAnswers: string = '';
        let selectedAnswersIds: number[] = [];
        formArray.controls.map((element: AbstractControl) => {
            const value = element.value
            if (!!value) {
                selectedAnswersIds.push(value);
            }
        })
        if (selectedAnswersIds && selectedAnswersIds.length > 0) {
            selectedAnswers = selectedAnswersIds.join(',');
        }
        return selectedAnswers;
    }


    get combinationForm(): FormGroup {
        return this._combinationForm;
    }

    get treeSelectControls(): AbstractControl[] {
        let formArray = this._combinationForm.get('values') as FormArray;
        return formArray.controls;
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}