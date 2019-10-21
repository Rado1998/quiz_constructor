import { NgModule } from '@angular/core';
import { QuestionTestComponent } from './question-test.component';
import { QuestionTestRoutingModule } from './question-test-routing.module';
import { QuestionDetailItemComponent } from '../../../../components';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    QuestionTestComponent,
    QuestionDetailItemComponent
  ],
  imports: [
    QuestionTestRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class QuestionTestModule { }
