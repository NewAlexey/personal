export class AuthModel {
    private readonly login: string;

    private readonly password: string;

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
