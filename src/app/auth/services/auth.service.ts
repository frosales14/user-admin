import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { LoginForm, LoginResponse } from '../interfaces/login.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly http = inject(HttpClient);

	authUrl = 'gettoken';

	authHeaders = new HttpHeaders().set('api-key', 'base64:1doK/itvdi1C+1FvFdu44qCG7WtI6TbJY35Rs2QUWPM=');

	async login(loginInfo: LoginForm): Promise<LoginResponse> {
		const url = `${environment.api_url}/${this.authUrl}`;

		const login$ = this.http.post<LoginResponse>(url, loginInfo, { headers: this.authHeaders });

		const response = await firstValueFrom(login$);

		return response;
	}
}
