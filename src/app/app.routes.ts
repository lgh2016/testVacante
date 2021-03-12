
import { RouterModule, Routes } from '@angular/router';
import { Error500Component } from './components/errors/500/error-500.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'error', component: Error500Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
