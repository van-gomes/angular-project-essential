import { HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer seu-token-aqui`,
    },
  });

  console.log('Interceptando requisição:', clonedRequest);
  return next(clonedRequest);
};