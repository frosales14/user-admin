import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { DashboardLayoutComponent } from './layout';

export const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
	},
	{
		path: 'dashboard',
		component: DashboardLayoutComponent,
		children: [{ path: 'users', loadComponent: () => import('./user/pages/user-list/user-list.component') }],
	},
];
