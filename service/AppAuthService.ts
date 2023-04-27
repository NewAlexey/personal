import { FetchApi } from "api/FetchApi";
import { AppAuthModel } from "models/AppAuthModel";

export class AppAuthService {
    private requestService = FetchApi.getInstance();

    private readonly baseUrl = `${process.env.NEXT_PUBLIC_HOST}api/super-login`;

    public async authLoginRequest(AuthModel: AppAuthModel): Promise<void> {
        await this.requestService.post(this.baseUrl, {
            login: AuthModel.login,
            password: AuthModel.password,
        });
    }
}
