import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/models';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
    selector: "app-slidenav",
    templateUrl: "slide-nav.component.html",
    styleUrls: ["slide-nav.component.scss"]
})

export class SlideNavComponent implements OnInit {

    public menuItem: MenuItem[] = [
        { icon: "question_answer", title: "Questions", routerLink: "/questions" },
        { icon: "question_answer", title: "Question Test", routerLink: "/questions/test" },
    ]

    constructor(public menuService: MenuService, private _cookieService: CookieService, private _router: Router) { }

    ngOnInit() { }

    public logOut(): void {
        this._cookieService.remove('accessToken');
        this._router.navigate(['/auth/login']);
    }

}