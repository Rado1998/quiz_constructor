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
                loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'registration',
                loadChildren: './registration/registration.module#RegistrationModule'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }