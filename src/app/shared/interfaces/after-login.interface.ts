export interface AfterLoginResponse {
	systemUser: SystemUser;
	adUser: AdUser;
	roles: Roles;
}

export interface AdUser {
	cn: string;
	created: Date;
	description: string;
	distinguishedName: string;
	displayName: string;
	modified: Date;
	objectCategory: string;
	objectClass: string;
	objectGUID: string;
	sid: string;
	samAccountName: string;
	accountExpirationDate: null;
	badLogonCount: number;
	lastBadPasswordAttempt: Date;
	lastLogon: Date;
	accountLockoutTime: null;
	city: string;
	company: string;
	country: string;
	department: string;
	division: null;
	emailAddress: string;
	employeeID: null;
	employeeNumber: null;
	fax: null;
	firstName: string;
	homeDirectory: null;
	homeDrive: null;
	homePage: null;
	homePhone: null;
	initials: null;
	logonWorkstations: null;
	manager: string;
	memberOf: string;
	mobilePhone: null;
	office: null;
	officePhone: null;
	organization: null;
	otherName: null;
	passwordLastSet: Date;
	poBox: null;
	postalCode: null;
	profilePath: null;
	scriptPath: null;
	state: string;
	streetAddress: string;
	lastName: string;
	title: string;
	userPrincipalName: string;
	primaryGroupId: number;
	userAccountControl: number;
	userControl: number;
	isCriticalSystemObject: boolean;
	samAccountType: number;
	countryCode: number;
	logonCount: number;
	adsPath: null;
	name: string;
	lastLogoff: number;
	instanceType: number;
	codepage: number;
	adminCount: number;
	managedObjects: null;
	servicePrincipalName: null;
}

export interface Roles {
	roleId: number;
	roleName: string;
	rolePermissions: RolePermission[];
}

export interface RolePermission {
	rolePermissionId: number;
	roleId: number;
	permissionId: number;
	permission: Permission;
}

export interface Permission {
	permissionId: number;
	permissionName: string;
}

export interface SystemUser {
	userId: number;
	employeeID: number;
	userName: string;
	email: string;
	passwordHash: null;
	createdAt: Date;
	lastLoginAt: Date;
	modifiedOn: null;
	roleId: number;
	jobDescriptionId: number;
	departmentId: number;
	locationId: number;
	securityAnswers: SecurityAnswer[];
}

export interface SecurityAnswer {
	userSecurityAnswerId: number;
	userId: number;
	questionId: number;
	answerHash: string;
	salt: string;
	createdAt: Date;
}
