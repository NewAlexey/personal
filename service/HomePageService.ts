import FireBaseApi from "api/FireBaseApi";
import { OperationStatusEnum } from "service/service.interfaces";
import { IHomePageData } from "utils/data.interfaces";

interface IHomePageService {
    getHomePageData: () => Promise<{ homePageData: IHomePageData }>;
    updateHomePageInfoData: (info: string) => Promise<{ status: OperationStatusEnum; message: string; }>;
}

class HomePageService implements IHomePageService {
    private api = new FireBaseApi();

    public async getHomePageData() {
        return this.api.getHomePageData();
    }

    public async updateHomePageInfoData(info: string) {
        return this.api.updateHomePageInfoData(info);
    }
}

export default new HomePageService();
