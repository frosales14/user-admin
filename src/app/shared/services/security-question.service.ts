import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { SecrityQuestionsResponse, UpdateSecurityQuestionModel } from '../interfaces/security-question.interface';

@Injectable({
	providedIn: 'root',
})
export class SecurityQuestionService {
	private readonly http = inject(HttpClient);

	private urlBase = environment.api_url;

	public async getSecurityQuestionList(): Promise<SecrityQuestionsResponse[]> {
		const url = `${this.urlBase}/SecurityQuestions`;
		const securityQuestions$ = this.http.get<SecrityQuestionsResponse[]>(url);
		const response = await firstValueFrom(securityQuestions$);
		return response;
	}

	public async setSecurityQuestions(body: UpdateSecurityQuestionModel[]) {
		const url = `${this.urlBase}/UserSecurityAnswer/AddList`;
		const securityQuestions$ = this.http.post<SecrityQuestionsResponse>(url, body);
		const response = await firstValueFrom(securityQuestions$);
		return response;
	}
}
