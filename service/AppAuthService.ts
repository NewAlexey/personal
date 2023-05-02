import { FetchApi } from "integrations/FetchApi";
import { AppAuthModel } from "models/AppAuthModel";
import { IVerifyAdminDataResponse } from "pages/api/super-login";

export class AppAuthService {
    private requestService = FetchApi.getInstance();

    private readonly baseUrl = `${process.env.NEXT_PUBLIC_HOST}api/super-login`;

    public async authLoginRequest(AuthModel: AppAuthModel): Promise<IVerifyAdminDataResponse> {
        return this.requestService.post(this.baseUrl, {
            login: AuthModel.login,
            password: AuthModel.password,
        });
    }
}
