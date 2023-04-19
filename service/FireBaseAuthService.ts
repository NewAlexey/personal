import { FireBaseApi } from "api/FireBaseApi";
import { FireBaseAuthModel } from "models/FireBaseAuthModel";

export class FireBaseAuthService {
    private api = new FireBaseApi();

    public async fireBaseAuthRequest(fireBaseAuthModel: FireBaseAuthModel) {
        return this.api.authInFireBase(fireBaseAuthModel);
    }
}
