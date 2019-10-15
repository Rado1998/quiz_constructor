import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './com/annaniks/quiz-constructor/views/main/main.module#MainModule'
  },
  {
    path: 'auth',
    loadChildren: './com/annaniks/quiz-constructor/views/auth/auth.module#AuthModule'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
