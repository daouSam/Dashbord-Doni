import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          // Gérer l'erreur 500 ici (par exemple, journalisation ou affichage d'un message d'erreur)
          console.error('Erreur 500 - Erreur côté serveur :', error);
          // Vous pouvez également rediriger l'utilisateur vers une page d'erreur personnalisée
          // ou effectuer d'autres actions nécessaires.
        }
        return throwError(error);
      })
    );
  }
}
