import { child, get } from "firebase/database";

import { dbRef } from "utils/firebaseConfig";
import { IHomePageInfo } from "utils/interfaces";

interface IFireBaseApi {
    getHomePageData: () => Promise<{ homePageData: IHomePageInfo, message: string }>;
}

class FireBaseApi implements IFireBaseApi {
    private homePageDataPath = "main";

    public async getHomePageData() {
        try {
            const snapshot = await get(child(dbRef, this.homePageDataPath));
            if (snapshot.exists()) {
                const data = snapshot.val();

                return {
                    message: "",
                    homePageData: { info: data.info },
                };
            }

            return {
                message: "Data does not exist",
                homePageData: { info: null },
            };
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`Index page error - ${error}`);

            return {
                message: "Network Error",
                homePageData: { info: null },
            };
        }
    }
}

export default FireBaseApi;
