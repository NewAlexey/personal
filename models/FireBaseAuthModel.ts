export interface IFireBaseAuthModel {
    password: string;
    email: string;
}

export class FireBaseAuthModel {
    private readonly _email: IFireBaseAuthModel["email"];

    private readonly _password: IFireBaseAuthModel["password"];

    constructor({
        email,
        password,
    }: { email: string, password: string }) {
        this._email = email;
        this._password = password;
    }

    public get email() {
        return this._email;
    }

    public get password() {
        return this._password;
    }
}
