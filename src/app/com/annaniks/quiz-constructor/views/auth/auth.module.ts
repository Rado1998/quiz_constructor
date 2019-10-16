import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
