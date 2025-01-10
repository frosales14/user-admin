export interface UserResponse {
	meta: Meta;
	data: user[];
	timespent: string;
}

export interface user {
	employeeID: number;
	userName: string;
	email: string;
	roleId: number;
	jobDescriptionId: number;
	departmentId: number;
	locationId: number;
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
