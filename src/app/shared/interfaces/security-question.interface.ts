export interface SecurityQuestionModalData {
	name: string;
}

export interface UpdateSecurityQuestionModel {
	userId: number;
	questionId: number;
	answer: string;
}

export interface SecrityQuestionsResponse {
	questionId: number;
	questionText: string;
	totalrows: number;
}

export interface Securityquestion {
	questionId: number;
	questionText: string;
	totalrows: number;
}

export interface Meta {
	pagination: Pagination;
}

export interface Pagination {
	count: number;
	current_page: number;
	per_page: number;
	total: number;
	total_pages: number;
}
