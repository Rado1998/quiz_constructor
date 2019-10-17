import { NgModule } from '@angular/core';
import { QuestionComponent } from './question.component';
import { SharedModule } from '../../../shared/shared.module';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionService } from './question.service';
import { QuestionItemComponent } from '../../../components';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionItemComponent
  ],
  imports: [
    SharedModule,
    QuestionRoutingModule
  ],
  providers: [QuestionService]
})
export class QuestionModule { }
