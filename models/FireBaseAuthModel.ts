export interface IFireBaseAuthModel {
    password: string;
    email: string;
}

export class FireBaseAuthModel {
    private readonly email: IFireBaseAuthModel["email"];

    private readonly password: IFireBaseAuthModel["password"];

    constructor({
        email,
        password,
    }: { email: string, password: string }) {
        this.email = email;
        this.password = password;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }
}
