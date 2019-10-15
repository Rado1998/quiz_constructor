import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { QuizesComponent } from './quizes/quizes.component';
import { QuizDetailComponent } from './quizes/quiz-detail/quiz-detail.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [MainComponent, QuizesComponent, QuizDetailComponent],
  imports: [
    CommonModule, MainRoutingModule
  ]
})
export class MainModule { }
