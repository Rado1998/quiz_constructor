import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './com/annaniks/quiz-constructor/interceptors';
import { CookieService, CookieModule } from 'ngx-cookie';
import { GuardService } from './com/annaniks/quiz-constructor/services/guard.service';
import { AuthGuard } from './com/annaniks/quiz-constructor/services/auth.guard';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
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
    AuthGuard,
    {
      provide: 'BASE_URL',
      useValue: environment.API_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
