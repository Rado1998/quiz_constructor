import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "app-question-detail-item",
    templateUrl: "question-detail-item.component.html",
    styleUrls: ["question-detail-item.component.scss"]
})

export class QuestionDetailItemComponent implements OnInit {

    public testForm: FormGroup;
    public selectedValue:string;

    constructor() { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.testForm = new FormBuilder().group({
            question: ["", Validators.required],
            answer: ["", Validators.required]
        })
    }
}