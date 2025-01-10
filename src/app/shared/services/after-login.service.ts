import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { AfterLoginResponse } from '../interfaces/after-login.interface';

@Injectable({
	providedIn: 'root',
})
export class AfterLoginService {
	private readonly http = inject(HttpClient);

	private urlBase = environment.api_url;

	public async getAfterLoginInfo(userId: string): Promise<AfterLoginResponse> {
		const url = `${this.urlBase}/users/AreSecurityQuestionsSet/${userId}`;
		const info$ = this.http.get<AfterLoginResponse>(url);
		const response = await firstValueFrom(info$);
		return response;
	}
}
