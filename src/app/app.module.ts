import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './com/annaniks/quiz-constructor/interceptors';
import { CookieService, CookieModule } from 'ngx-cookie';
import { AuthGuard } from './com/annaniks/quiz-constructor/services/auth.guard';
import { environment } from './../environments/environment.prod';
import { LoadingComponent } from './com/annaniks/quiz-constructor/components';
import { GuardService, LoadingService } from './com/annaniks/quiz-constructor/services';
import { SharedModule } from './com/annaniks/quiz-constructor/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    CookieService,
    GuardService,
    LoadingService,
    AuthGuard,
    {
      provide: 'BASE_URL',
      useValue: environment.API_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
