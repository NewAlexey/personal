import {
    child,
    DatabaseReference,
    getDatabase,
    ref,
    update,
} from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FireBaseAuthModel } from "models/FireBaseAuthModel";
import { FetchApi } from "integrations/FetchApi";
import { IAuthVariables } from "pages/api/auth-settings";

interface IFirebaseConfig {
    authDomain?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
    measurementId?: string;
    apiKey?: string;
    databaseURL?: string;
}

const firebaseConfig: IFirebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    // databaseURL: process.env.NEXT_PUBLIC_FB_DB_URL,
    authDomain: process.env.NEXT_PUBLIC_FB_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FB_MEASURE_ID,
};

interface IFireBaseApi {
    updateHomePageAboutData: (info: string) => Promise<{ message: string }>;
    authInFireBase: (fireBaseAuthModel: FireBaseAuthModel) => Promise<{ message: string }>;
}

async function getVariables(): Promise<IAuthVariables> {
    const url = `${process.env.NEXT_PUBLIC_HOST}api/auth-settings`;
    const requestService = FetchApi.getInstance();

    return requestService.get(url);
}

export class FireBaseApi implements IFireBaseApi {
    static instance: FireBaseApi;

    private readonly fbDbRef: DatabaseReference;

    private readonly HOME_PAGE_DATA_PATH = "home";

    private readonly UPDATE_SUCCESSFUL_MESSAGE = "Update successful!";

    private readonly AUTH_SUCCESSFUL_MESSAGE = "Authentication successful!";

    private constructor(config: IFirebaseConfig) {
        this.fbDbRef = ref(getDatabase(initializeApp(config)));
    }

    static async getInstance() {
        if (!this.instance) {
            const {
                key,
                url,
            } = await getVariables();

            this.instance = new FireBaseApi({
                ...firebaseConfig,
                apiKey: key,
                databaseURL: url,
            });
        }

        return this.instance;
    }

    public async updateHomePageAboutData(info: string) {
        await update(child(this.fbDbRef, this.HOME_PAGE_DATA_PATH), { info });

        return {
            message: this.UPDATE_SUCCESSFUL_MESSAGE,
        };
    }

    public async authInFireBase(fireBaseAuthModel: FireBaseAuthModel) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, fireBaseAuthModel.email, fireBaseAuthModel.password);

        return {
            message: this.AUTH_SUCCESSFUL_MESSAGE,
        };
    }
}
