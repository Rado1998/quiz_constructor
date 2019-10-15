import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RegistrationComponent } from "./registration.component";
import { RegistrationRoutingModule } from './registration-routing.module';


@NgModule({
    declarations: [RegistrationComponent],
    imports: [RegistrationRoutingModule],
    exports: []
})

export class RegistrationModule { }

