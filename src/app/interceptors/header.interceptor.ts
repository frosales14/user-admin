import { HttpEvent } from '@angular/common/http';

import { HttpHandlerFn } from '@angular/common/http';

import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function headerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	const token = localStorage.getItem('token');

	if (!token) return next(req);

	const newReq = req.clone({
		headers: req.headers.append('Authorization', `Bearer ${token}`),
	});

	return next(newReq);
}
