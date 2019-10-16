import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/models';

@Component({
    selector: "app-slidenav",
    templateUrl: "slide-nav.component.html",
    styleUrls: ["slide-nav.component.scss"]
})

export class SlideNavComponent implements OnInit {

    public menuItem: MenuItem[] =
    [
        { icon: "question_answer", title: "Questions", routerLink: "" },
        { icon: "exit_to_app", title: "Log Out", routerLink: "" },
    ] 

    constructor(public menuService:MenuService) { }

    ngOnInit() { }
}