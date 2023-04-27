export interface IAppAuthModel {
    login: string;
    password: string;
}

export class AppAuthModel {
    private readonly _login: IAppAuthModel["login"];

    private readonly _password: IAppAuthModel["password"];

    constructor({
        login,
        password,
    }: { login: string, password: string }) {
        this._login = login;
        this._password = password;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }
}
