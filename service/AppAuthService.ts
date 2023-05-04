import { FetchApi } from "integrations/FetchApi";
import { AppAuthModel } from "models/AppAuthModel";
import { ILoginAdminResponse } from "pages/api/super-login";
import { ILogoutAdminResponse } from "pages/api/super-logout";

export class AppAuthService {
    private requestService = FetchApi.getInstance();

    private readonly PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;

    private readonly BASE_LOGIN_URL = `${this.PUBLIC_HOST}api/super-login`;

    private readonly BASE_LOGOUT_URL = `${this.PUBLIC_HOST}api/super-logout`;

    public async authLoginRequest(AuthModel: AppAuthModel): Promise<ILoginAdminResponse> {
        return this.requestService.post(this.BASE_LOGIN_URL, {
            login: AuthModel.login,
            password: AuthModel.password,
        });
    }

    public async authLogoutRequest(): Promise<ILogoutAdminResponse> {
        return this.requestService.post(this.BASE_LOGOUT_URL, {});
    }
}
