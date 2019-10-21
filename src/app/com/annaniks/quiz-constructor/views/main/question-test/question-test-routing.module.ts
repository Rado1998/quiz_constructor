import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionTestComponent } from './question-test.component';

const questionTestRoutes: Routes = [
    { path: '', component: QuestionTestComponent }
]

@NgModule({
    imports: [RouterModule.forChild(questionTestRoutes)],
    exports: [RouterModule]
})
export class QuestionTestRoutingModule { }