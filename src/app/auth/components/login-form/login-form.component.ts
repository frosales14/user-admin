import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginForm, LoginResponse } from '../../interfaces/login.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [MatInputModule, MatIcon, MatButton, ReactiveFormsModule],
	templateUrl: './login-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'w-full w-full max-w-4xl bg-background text-on-surface p-8 xl:px-16 xl:pt-6 rounded-3xl',
	},
})
export class LoginFormComponent {
	private readonly fb = inject(FormBuilder);
	private readonly authService = inject(AuthService);
	private readonly router = inject(Router);

	loginForm = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
	});

	errorMessage = signal<string>('');

	async onSubmit() {
		if (this.loginForm.invalid) return;

		this.errorMessage.set('');
		const formValue = this.loginForm.value as LoginForm;
		let response: LoginResponse;

		try {
			response = await this.authService.login(formValue);
		} catch (unknowError: unknown) {
			if (unknowError instanceof HttpErrorResponse == false) throw new Error('something went wrong');
			const { error } = unknowError as HttpErrorResponse;
			this.errorMessage.set(error);
			this.loginForm.reset();
			throw new Error(`Something went wrong, ${error}`);
		}

		localStorage.setItem('token', response.token);
		localStorage.setItem('userId', response.user_id);
		this.router.navigateByUrl('/dashboard');
	}

  getAfterLoginInfo() {
    throw Error('not implemented')
  }
}
