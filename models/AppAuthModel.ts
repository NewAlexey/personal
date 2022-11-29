export interface IAppAuthModel {
    login: string;
    password: string;
}

export class AppAuthModel {
    private readonly login: IAppAuthModel["login"];

    private readonly password: IAppAuthModel["password"];

    constructor({
        login,
        password,
    }: { login: string, password: string }) {
        this.login = login;
        this.password = password;
    }

    public authDataToString(): string {
        const authData = {
            login: this.login,
            password: this.password,
        };

        return JSON.stringify(authData);
    }
}
