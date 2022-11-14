import FireBaseApi from "api/FireBaseApi";
import { IHomePageInfo } from "utils/interfaces";
import { MOCK_HOME_INFO_PAGE_DATA } from "utils/constants";

interface IHomePageService {
    getHomePageData: () => Promise<{ homePageData: IHomePageInfo }>;
}

class HomePageService implements IHomePageService {
    private api = new FireBaseApi();

    public async getHomePageData() {
        const {
            message,
            homePageData,
        } = await this.api.getHomePageData();

        if (!homePageData.info) {
            return {
                message,
                homePageData: { info: MOCK_HOME_INFO_PAGE_DATA },
            };
        }

        return {
            message,
            homePageData: { info: homePageData.info as string },
        };
    }
}

export default new HomePageService();
