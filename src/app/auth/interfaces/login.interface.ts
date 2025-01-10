export interface LoginForm {
	username: string;
	password: string;
}

export interface LoginResponse {
	token: string;
	user_id: string;
	expires_at: Date;
}
