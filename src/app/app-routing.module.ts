import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './com/annaniks/quiz-constructor/services/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './com/annaniks/quiz-constructor/views/main/main.module#MainModule'
  },
  {
    path: 'auth',
    loadChildren: './com/annaniks/quiz-constructor/views/auth/auth.module#AuthModule'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
