import { Routes } from '@angular/router';
import { authenticationRoutes } from './features/authentication/authentication.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(item => item.HomeComponent) },
  { path: 'authenticate', children: authenticationRoutes },
  { path: '**', redirectTo: 'authenticate/login', pathMatch: 'full' },
];

