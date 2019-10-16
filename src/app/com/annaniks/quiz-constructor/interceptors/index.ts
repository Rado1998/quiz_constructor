import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptors } from './api.interceptor';


export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptors, multi: true },

];