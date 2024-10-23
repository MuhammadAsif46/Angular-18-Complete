import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './services/auth.guard';
import { GetApiComponent } from './components/get-api/get-api.component';

export const routes: Routes = [
    // default route
    {
        path: '',
        redirectTo:'login',
        pathMatch: 'full',
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path:'home',
                component: HomeComponent,
                canActivate: [authGuard]
            },
            {
                path:'profile',
                component: ProfileComponent
            },
            {
                path:'getApi',
                component: GetApiComponent
            }
        ]
    },
];
