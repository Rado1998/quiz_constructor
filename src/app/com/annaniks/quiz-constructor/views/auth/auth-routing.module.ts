import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,

        children: [
            {
                path: '', 
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadChildren: 'src/app/com/annaniks/quiz-constructor/views/auth/login/login.module#LoginModule'
            },
            {
                path: 'registration',
                loadChildren: 'src/app/com/annaniks/quiz-constructor/views/auth/registration/registration.module#RegistrationModule'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }