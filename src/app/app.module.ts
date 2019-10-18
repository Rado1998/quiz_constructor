import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './com/annaniks/quiz-constructor/interceptors';
import { CookieService, CookieModule } from 'ngx-cookie';
import { GuardService } from './com/annaniks/quiz-constructor/services/guard.service';
import { AuthGuard } from './com/annaniks/quiz-constructor/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    CookieService,
    GuardService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
