export class LoginResponseModel {
    access: string;
    refresh: string;
}

export interface LoginRequestModel {
    username: string;
    password: string;
}