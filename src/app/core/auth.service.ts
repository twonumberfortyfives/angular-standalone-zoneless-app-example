import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../app.config";
import { catchError, map, Observable, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private httpClient = inject(HttpClient);
    private router = inject(Router);
    private backendApiUrl: string = environment.backendApiUrl;
    private oauthEndpoint: string = `${this.backendApiUrl}/api/oauth/microsoft/`

    
    authorizeWithMicrosoft(): Observable<boolean> {
        return this.httpClient.get<number>(
            `${this.backendApiUrl}/api/oauth/protected/`, 
            { observe: 'response', withCredentials: true }
        ).pipe(
            map(response => response.status === 200),
            catchError((err) => {
                this.router.navigate(['/login'])
                return of(false)
            })
        )
    }

    authenticateWithMicrosoft() {
        this.httpClient.get<{ url: string }>(
            `${this.oauthEndpoint}login/`, 
            { withCredentials: true }
        )
            .subscribe((response) =>{
                window.location.href = response.url
            })
    }
}