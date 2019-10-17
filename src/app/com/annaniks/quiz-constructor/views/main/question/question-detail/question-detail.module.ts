import { NgModule } from '@angular/core';
import { QuestionDetailRoutingModule } from './question-detail-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { QuestionDetailComponent } from './question-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuestionDetailComponent
  ],
  imports: [
    SharedModule,
    QuestionDetailRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QuestionDetailModule { }
