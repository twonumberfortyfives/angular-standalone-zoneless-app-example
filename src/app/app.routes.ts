import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { PublicLayoutComponent } from './layouts/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ]
    },
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
        ]
    }
];
