import { Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  // create Routes
  {
    path: 'profile', // Mandatory
    component: ProfileComponent, // Mandatory
  },
  {
    path: 'login', // Mandatory
    component: LoginComponent, // Mandatory
  },
  {
    path: 'signup', // Mandatory
    component: SignupComponent, // Mandatory
  },
  {
    path: 'about', // Mandatory
    component: AboutComponent, // Mandatory
  },
  {
    path: 'home', // Mandatory
    component: HomeComponent, // Mandatory
  },
];
