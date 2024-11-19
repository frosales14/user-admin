import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-user-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserListComponent {}
