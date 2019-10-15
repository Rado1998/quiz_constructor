import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(loginRutes)],
    exports: [RouterModule]
})
export class LoginRoutingModule{}