export interface MenuItem {
    icon: string,
    title: string,
    routerLink: string;
}

export interface ServerResponse<T> {
    count: number;
    next: null;
    previous: null;
    results: T
}

export interface GetTokenResponse {
    access: string
}