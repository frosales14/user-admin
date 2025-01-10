import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { UserResponse } from '../interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private readonly http = inject(HttpClient);

	private urlBase = environment.api_url;

	async getUserInfo(): Promise<UserResponse> {
		const url = `${this.urlBase}/users`;
		const securityQuestions$ = this.http.get<UserResponse>(url);
		const response = await firstValueFrom(securityQuestions$);
		return response;
	}
}
