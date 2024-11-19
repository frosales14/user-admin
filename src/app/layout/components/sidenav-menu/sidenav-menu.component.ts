import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';
import { MatIcon } from '@angular/material/icon';
import { MatNavList, MatListItem, MatListItemTitle, MatListItemIcon } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-sidenav-menu',
	standalone: true,
	imports: [
		CommonModule,
		MatNavList,
		MatIcon,
		MatListItem,
		MatListItemTitle,
		MatListItemIcon,
		RouterLink,
		RouterLinkActive,
	],
	templateUrl: './sidenav-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			:host * {
				transition: all 200ms ease-in-out;
			}

			.nav-item {
				border-left: 5px solid;
				border-left-color: transparent;
			}

			mat-nav-list {
				& .selected-menu-item {
					border-left: 5px solid;
					border-left-color: var(--tertiary);
					background: rgba(0, 0, 0, 0.05);
				}
			}
		`,
	],
})
export class SidenavMenuComponent {
	isCollapse = input<boolean>(false);
	menuItems = input.required<MenuItem[]>();
}
