import { Component, OnInit, Input, forwardRef, OnDestroy } from '@angular/core';
import { ITreeSelectData } from './tree-select.models';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-tree-select',
    templateUrl: 'tree-select.component.html',
    styleUrls: ['tree-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TreeSelectComponent),
            multi: true,
        },
    ]
})
export class TreeSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
    public isOpen: boolean = false;
    public valueControl: FormControl = new FormControl(null, Validators.nullValidator);
    private _unsubscribe$: Subject<void> = new Subject<void>();
    @Input('index') public index: number = 0;
    @Input('data') public data: ITreeSelectData = {} as ITreeSelectData;

    constructor() { }

    ngOnInit() {
        this.valueControl.valueChanges
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((value: number) => {
                console.log(value);
                this.propagateChange(value);
            })
    }

    public onClickOpen(): void {
        this.isOpen = !this.isOpen;
    }

    public propagateChange = (_: any) => { };

    public registerOnChange(fn) {
        this.propagateChange = fn;
    }

    public registerOnTouched() { }


    public writeValue(value): void {
        if (value)
            this.valueControl.setValue(value);
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}