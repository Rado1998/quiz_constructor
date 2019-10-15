import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question.component';

const questionRoutes: Routes = [
    { path: '', component: QuestionComponent },
    { path: ':id', loadChildren: './question-detail/question-detail.module#QuestionDetailModule' }
]

@NgModule({
    imports: [RouterModule.forChild(questionRoutes)],
    exports: [RouterModule]
})
export class QuestionRoutingModule { }