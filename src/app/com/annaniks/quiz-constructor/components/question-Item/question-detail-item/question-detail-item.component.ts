import { Component, OnInit, Input, forwardRef, OnDestroy } from "@angular/core";
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { IQuestionAnswer } from '../../../views/main/question/question.models';
import { QuestionService } from '../../../views/main/question/question.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: "app-question-detail-item",
    templateUrl: "question-detail-item.component.html",
    styleUrls: ["question-detail-item.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => QuestionDetailItemComponent),
            multi: true,
        },
    ]
})

export class QuestionDetailItemComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input('question') public question: IQuestionAnswer = {} as IQuestionAnswer;
    @Input('questionIndex') public questionIndex: number = 0;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    private _disabledQuestionSubscription = new Subscription();
    public testForm: FormGroup;
    public selectedValue: FormControl = new FormControl(null);

    constructor(private _questionService: QuestionService) { }


    ngOnInit() {
        this._handleControlChanges();
        this._handleDisableEvent();
    } 

    private _handleControlChanges(): void {
        this.selectedValue.valueChanges
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((value: number) => {
                this.propagateChange(value);
            })
    }

    private _handleDisableEvent(): void {
        this._disabledQuestionSubscription = this._questionService.getDisableQuestionState().subscribe((isDisabled: boolean) => {
            if (isDisabled) {
                this.selectedValue.disable();
                this._disabledQuestionSubscription.unsubscribe();
            }
        })
    }

    public propagateChange = (_: number) => { };

    public registerOnChange(fn) {
        this.propagateChange = fn;
    }

    public registerOnTouched() { }


    public writeValue(): void { }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
        this._disabledQuestionSubscription.unsubscribe();
    }
}