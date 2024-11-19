import { MenuItem } from '../interfaces/menu.interface';

export const menuItems: MenuItem[] = [
	{
		icon: 'data_usage',
		label: 'graphics',
		route: '/graphics',
	},
	{
		icon: 'account_circle',
		label: 'user',
		route: '/dashboard/users',
	},
	{
		icon: 'settings',
		label: 'configs',
		route: '/config',
	},
];
