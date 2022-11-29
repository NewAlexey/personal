import {
    child,
    DatabaseReference,
    get,
    getDatabase,
    ref,
    update,
} from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { IHomePageData } from "utils/data.interfaces";
import { OperationStatusEnum } from "service/service.interfaces";
import { initializeApp } from "firebase/app";
import { FireBaseAuthModel } from "models/FireBaseAuthModel";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FB_MEASURE_ID,
    databaseURL: process.env.NEXT_PUBLIC_FB_DB_URL,
};

interface IFireBaseApi {
    getHomePageData: () => Promise<{ homePageData: IHomePageData, message: string }>;
    updateHomePageInfoData: (info: string) => Promise<{ status: OperationStatusEnum, message: string }>;
}

class FireBaseApi implements IFireBaseApi {
    private readonly fbDbRef: DatabaseReference;

    private readonly homePageDataPath = "home";

    private readonly getHomePageError = "Home page data does not exist";

    private readonly updateHomePageDataSuccessMessage = "Update successful!";

    private readonly authenticationSuccessMessage = "Authentication successful!";

    constructor() {
        this.fbDbRef = ref(getDatabase(initializeApp(firebaseConfig)));
    }

    public async getHomePageData() {
        try {
            const snapshot = await get(child(this.fbDbRef, this.homePageDataPath));

            if (snapshot.exists()) {
                const data = snapshot.val();

                return {
                    message: "",
                    homePageData: { info: data.info },
                };
            }

            return {
                message: this.getHomePageError,
                homePageData: { info: null },
            };
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`Home page error - ${error}`);

            return {
                message: "Network Error",
                homePageData: { info: null },
            };
        }
    }

    public async updateHomePageInfoData(info: string) {
        try {
            await update(child(this.fbDbRef, this.homePageDataPath), { info });

            return {
                status: OperationStatusEnum.OK,
                message: this.updateHomePageDataSuccessMessage,
            };
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`updateHomePageInfo error - ${error}`);

            return {
                status: OperationStatusEnum.ERROR,
                // @ts-ignore
                message: `${error.message}`,
            };
        }
    }

    public async authInFB(fbAuthModel: FireBaseAuthModel) {
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, fbAuthModel.getEmail(), fbAuthModel.getPassword());

            return {
                status: OperationStatusEnum.OK,
                message: this.authenticationSuccessMessage,
            };
        } catch (error) {
            return {
                status: OperationStatusEnum.ERROR,
                // @ts-ignore
                message: `${error.message}`,
            };
        }
    }
}

export default FireBaseApi;
