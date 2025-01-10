import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-theme-toogle',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './theme-toogle.component.html',
	styleUrl: './theme-toogle.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: '',
	},
})
export class ThemeToogleComponent {
	public isLightModeOn = signal<boolean>(true);
	private _document = inject(DOCUMENT);

	constructor() {
		this.getThemePrefference();
	}

	getThemePrefference() {
		const prefference = localStorage.getItem('isLightModeOn') ?? 'true';

		if (!JSON.parse(prefference)) this.changeTheme();
	}

	changeTheme() {
		this.isLightModeOn.set(!this.isLightModeOn());

		localStorage.setItem('isLightModeOn', JSON.stringify(this.isLightModeOn()));
		if (this._document.documentElement.classList.contains('dark')) {
			this._document.documentElement.classList.remove('dark');
			this._document.documentElement.classList.add('light');
		} else {
			this._document.documentElement.classList.remove('light');
			this._document.documentElement.classList.add('dark');
		}
	}
}
