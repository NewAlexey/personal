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
    updateHomePageAboutData: (info: string) => Promise<{ message: string }>;
    authInFireBase: (fireBaseAuthModel: FireBaseAuthModel) => Promise<{ message: string }>;
}

export class FireBaseApi implements IFireBaseApi {
    static instance: FireBaseApi;

    private readonly fbDbRef: DatabaseReference;

    private readonly HOME_PAGE_DATA_PATH = "home";

    private readonly UPDATE_SUCCESSFUL_MESSAGE = "Update successful!";

    private readonly AUTH_SUCCESSFUL_MESSAGE = "Authentication successful!";

    private constructor() {
        this.fbDbRef = ref(getDatabase(initializeApp(firebaseConfig)));
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new FireBaseApi();
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
