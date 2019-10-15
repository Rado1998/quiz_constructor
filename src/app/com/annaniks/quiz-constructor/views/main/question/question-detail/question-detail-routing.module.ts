import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDetailComponent } from './question-detail.component';

const questionDetailsRoutes: Routes = [
    { path: '', component: QuestionDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(questionDetailsRoutes)],
    exports: [RouterModule]
})
export class QuestionDetailRoutingModule { }