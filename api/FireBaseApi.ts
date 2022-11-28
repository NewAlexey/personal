import { child, get, update } from "firebase/database";

import { dbRef } from "utils/firebaseConfig";
import { IHomePageData } from "utils/data.interfaces";
import { OperationStatusEnum } from "service/service.interfaces";

interface IFireBaseApi {
    getHomePageData: () => Promise<{ homePageData: IHomePageData, message: string }>;
    updateHomePageInfoData: (info: string) => Promise<{ status: OperationStatusEnum, message: string }>;
}

class FireBaseApi implements IFireBaseApi {
    private homePageDataPath = "home";

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
                message: "Home page data does not exist",
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
            await update(child(dbRef, this.homePageDataPath), { info });

            return {
                status: OperationStatusEnum.OK,
                message: "All good, cool!",
            };
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`updateHomePageInfo error - ${error}`);

            return {
                status: OperationStatusEnum.ERROR,
                message: "Network Error",
            };
        }
    }
}

export default FireBaseApi;
