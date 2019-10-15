import { NgModule } from '@angular/core';
import { QuestionComponent } from './question.component';
import { SharedModule } from '../../../shared/shared.module';
import { QuestionRoutingModule } from './question-routing.module';



@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    SharedModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
