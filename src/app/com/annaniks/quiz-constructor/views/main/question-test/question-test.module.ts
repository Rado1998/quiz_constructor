import { NgModule } from '@angular/core';
import { QuestionTestComponent } from './question-test.component';
import { QuestionTestRoutingModule } from './question-test-routing.module';
import { QuestionDetailItemComponent } from '../../../components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [QuestionTestComponent,QuestionDetailItemComponent],
  imports: [
    QuestionTestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule

  ]
})
export class QuestionTestModule { }
