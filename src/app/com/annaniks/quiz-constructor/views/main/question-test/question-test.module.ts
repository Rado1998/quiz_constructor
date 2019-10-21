import { NgModule } from '@angular/core';
import { QuestionTestComponent } from './question-test.component';
import { QuestionTestRoutingModule } from './question-test-routing.module';
import { QuestionDetailItemComponent } from '../../../components';

@NgModule({
  declarations: [QuestionTestComponent,QuestionDetailItemComponent],
  imports: [
    QuestionTestRoutingModule
  ]
})
export class QuestionTestModule { }
