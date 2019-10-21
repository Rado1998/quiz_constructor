import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";

const mainRoutes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'questions',
                pathMatch: 'full'
            },
            {
                path: 'questions',
                loadChildren: './question/question.module#QuestionModule'
            },
            {
                path: 'questions-test',
                loadChildren: './question-test/question-test.module#QuestionTestModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }