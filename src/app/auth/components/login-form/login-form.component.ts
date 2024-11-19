import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [CommonModule, MatInputModule, MatIcon, MatButton],
	templateUrl: './login-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'w-full w-full max-w-4xl bg-background text-on-surface p-8 rounded-3xl',
	},
})
export class LoginFormComponent {
	private _document = inject(DOCUMENT);
	changeTheme() {
		if (this._document.documentElement.classList.contains('dark')) {
			this._document.documentElement.classList.remove('dark');
			this._document.documentElement.classList.add('light');
		} else {
			this._document.documentElement.classList.remove('light');
			this._document.documentElement.classList.add('dark');
		}
	}
}
