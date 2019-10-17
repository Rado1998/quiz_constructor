import { Component, OnInit, Input } from "@angular/core";
import { IQuestionAnswer } from '../../views/main/question/questions.models';

@Component({
    selector: "app-question-item",
    templateUrl: "question-item.component.html",
    styleUrls: ["question-item.component.scss"]
})

export class QuestionItemComponent implements OnInit {

    @Input('question') public question: IQuestionAnswer;

    constructor() { }

    ngOnInit() { }
}