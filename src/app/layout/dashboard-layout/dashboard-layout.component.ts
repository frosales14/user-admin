import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { SidenavHeaderComponent } from '../components/sidenav-header/sidenav-header.component';
import { SidenavMenuComponent } from '../components/sidenav-menu/sidenav-menu.component';
import { MenuItem } from '../interfaces/menu.interface';
import { menuItems } from '../constants/menu.constantant';
import { ThemeToogleComponent } from '../components/theme-toogle/theme-toogle.component';
import { AfterLoginService } from '../../shared/services/after-login.service';
import { MatDialog } from '@angular/material/dialog';
import { SecurityQuestionModalComponent } from '../../shared/components/security-question-modal/security-question-modal.component';

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
		ThemeToogleComponent,
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
				transition:
					width 500ms ease-in-out,
					margin 500ms ease-in-out;
			}
		`,
	],
})
export class DashboardLayoutComponent implements OnInit {
	private readonly afterLoginService = inject(AfterLoginService);
	private readonly dialog = inject(MatDialog);

	collapse = signal<boolean>(false);
	menuList = signal<MenuItem[]>(menuItems);
	sidenavWidth = computed(() => (this.collapse() ? '65px' : '250px'));

	ngOnInit(): void {
		this.getAfterLoginInfo();
	}

	async getAfterLoginInfo() {
		const userId = localStorage.getItem('userId');

		if (!userId) return;

		const response = await this.afterLoginService.getAfterLoginInfo(userId);

		this.dialog.open(SecurityQuestionModalComponent, {
			data: { name: response.adUser.name },
			disableClose: true,
			hasBackdrop: true,
			id: 'questions-modal',
			width: '70%',
		});

		if (!response.systemUser.lastLoginAt) {
			console.log();
		}

		console.log(response);
	}
}
