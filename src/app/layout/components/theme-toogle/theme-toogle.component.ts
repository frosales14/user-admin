import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-theme-toogle',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './theme-toogle.component.html',
	styleUrl: './theme-toogle.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToogleComponent { }
