import { NgModule } from '@angular/core';
import { QuestionDetailRoutingModule } from './question-detail-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { QuestionDetailComponent } from './question-detail.component';

@NgModule({
  declarations: [
    QuestionDetailComponent
  ],
  imports: [
    SharedModule,
    QuestionDetailRoutingModule
  ]
})
export class QuestionDetailModule { }
