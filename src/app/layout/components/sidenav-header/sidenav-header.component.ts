import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
	selector: 'app-sidenav-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidenav-header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			.hide-header-text {
				opacity: 0;
				height: 0;
			}
		`,
	],
})
export class SidenavHeaderComponent {
	isCollapse = input<boolean>(false);

	pictureSize = computed(() => (this.isCollapse() ? '32' : '100'));
}
