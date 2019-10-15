import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: 'login',
                loadChildren: 'src/app/com/annaniks/quiz-constructor/views/auth/login/login.module#LoginModule'

            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(loginRutes)],
    exports: [RouterModule]
})
export class LoginRoutingModule{}