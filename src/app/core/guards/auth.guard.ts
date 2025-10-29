import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";


export const MicrosoftOAuthGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService)
    return authService.authorizeWithMicrosoft()
}