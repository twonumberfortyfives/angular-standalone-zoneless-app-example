import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { environment } from "../../../environments/environment";


export function MicrosoftOAuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const router: Router = inject(Router);

    if (!req.url.includes(environment.backendApiUrl)) {
        return next(req)
    }
    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            if (err.status === 403) {
                router.navigate(['/login'])
            }
            return throwError(() => err);
        })
    )
}