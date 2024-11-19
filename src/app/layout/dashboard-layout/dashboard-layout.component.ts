import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { SidenavHeaderComponent } from '../components/sidenav-header/sidenav-header.component';
import { SidenavMenuComponent } from '../components/sidenav-menu/sidenav-menu.component';
import { MenuItem } from '../interfaces/menu.interface';
import { menuItems } from '../constants/menu.constantant';

@Component({
	selector: 'app-dashboard-layout',
	standalone: true,
	imports: [
		RouterOutlet,
		MatToolbarModule,
		MatSidenavModule,
		MatIcon,
		MatIconButton,
		SidenavHeaderComponent,
		SidenavMenuComponent,
	],
	templateUrl: './dashboard-layout.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			mat-toolbar {
				position: relative;
				top: 0;
				z-index: 5;
			}
			.content {
				padding: 24px;
			}
			mat-sidenav-container {
				height: calc(100vh - 64px);
			}

			mat-sidenav,
			mat-sidenav-content {
				transition: all 500ms ease-in-out;
			}
		`,
	],
})
export class DashboardLayoutComponent {
	collapse = signal<boolean>(false);
	menuList = signal<MenuItem[]>(menuItems);
	sidenavWidth = computed(() => (this.collapse() ? '65px' : '250px'));
}
