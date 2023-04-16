import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientInterceptor } from './http.interceptor';

const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ClientInterceptor, multi: true },
];

export default interceptors;
