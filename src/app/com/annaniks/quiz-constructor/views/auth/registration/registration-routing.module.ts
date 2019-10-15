import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const registrationRutes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(registrationRutes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule{}