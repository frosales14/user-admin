import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../interfaces/user.interface';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-user-list',
	standalone: true,
	imports: [CommonModule, MatTableModule, MatIcon, MatButtonModule],
	templateUrl: './user-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserListComponent {
	private readonly usersService = inject(UserService);

	dataSource = signal<user[]>([]);

	displayedColumns: string[] = ['id', 'username', 'email', 'department', 'actions'];

	constructor() {
		this.getUsers();
	}

	async getUsers() {
		const response = await this.usersService.getUserInfo();
		this.dataSource.set(response.data);
	}
}
