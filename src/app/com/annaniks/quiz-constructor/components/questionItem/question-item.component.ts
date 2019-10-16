import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-question-item",
    templateUrl: "question-item.component.html",
    styleUrls: ["question-item.component.scss"]
})

export class QuestionItemComponent implements OnInit {

    @Input() questions
    constructor() { }

    ngOnInit() { }
}