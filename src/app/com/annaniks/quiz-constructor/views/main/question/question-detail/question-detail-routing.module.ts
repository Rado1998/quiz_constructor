import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDetailComponent } from './question-detail.component';

const questionDetailsRoutes: Routes = [
    { path: '', component: QuestionDetailComponent },
    { path: 'combination', loadChildren: './combination/combination.module#CombinationModule' }
]

@NgModule({
    imports: [RouterModule.forChild(questionDetailsRoutes)],
    exports: [RouterModule]
})
export class QuestionDetailRoutingModule { }