import FireBaseApi from "api/FireBaseApi";
import { FireBaseAuthModel } from "models/FireBaseAuthModel";

export class FBAuthService {
    private api = new FireBaseApi();

    public async fbAuthRequest(fbAuthModel: FireBaseAuthModel) {
        return this.api.authInFB(fbAuthModel);
    }
}
