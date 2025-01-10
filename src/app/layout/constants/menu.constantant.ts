import { MenuItem } from '../interfaces/menu.interface';

export const menuItems: MenuItem[] = [
	{
		icon: 'data_usage',
		label: 'Dashboard',
		route: '/graphics',
	},
	{
		icon: 'account_circle',
		label: 'Active Directory',
		route: '/dashboard/users',
	},
	{
		icon: 'settings',
		label: 'Configs',
		route: '/config',
	},
];
