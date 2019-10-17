import { Component, OnInit, Input } from "@angular/core";
import { IQuestionAnswers } from '../../views/main/question/questions.models';

@Component({
    selector: "app-question-item",
    templateUrl: "question-item.component.html",
    styleUrls: ["question-item.component.scss"]
})

export class QuestionItemComponent implements OnInit {

    @Input() question: IQuestionAnswers;
    constructor() { }

    ngOnInit() { }
}