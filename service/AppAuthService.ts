import { FetchApi } from "integrations/FetchApi";
import { AppAuthModel } from "models/AppAuthModel";
import { IVerifyAdminDataResponse } from "pages/api/super-login";

export class AppAuthService {
    private requestService = FetchApi.getInstance();

    private readonly baseLoginUrl = `${process.env.NEXT_PUBLIC_HOST}api/super-login`;

    private readonly baseLogoutUrl = `${process.env.NEXT_PUBLIC_HOST}api/super-logout`;

    public async authLoginRequest(AuthModel: AppAuthModel): Promise<IVerifyAdminDataResponse> {
        return this.requestService.post(this.baseLoginUrl, {
            login: AuthModel.login,
            password: AuthModel.password,
        });
    }

    public async authLogoutRequest(): Promise<void> {
        return this.requestService.post(this.baseLogoutUrl, {});
    }
}
