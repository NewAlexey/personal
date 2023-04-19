import { FireBaseApi } from "api/FireBaseApi";
import { OperationStatusEnum } from "service/service.interfaces";
import { FetchApi } from "api/FetchApi";

interface IGetHomePageData {
    about: string;
}

interface IHomePageService {
    getHomePageData: () => Promise<IGetHomePageData>;
    updateHomePageInfoData: (info: string) => Promise<{ status: OperationStatusEnum; message: string; }>;
}

// TODO create static instance method (like fetchAPI);

export class HomePageService implements IHomePageService {
    private requestService = FetchApi.getInstance();

    private homeDataUrl = "https://portfolio-58d57-default-rtdb.europe-west1.firebasedatabase.app/home.json";

    public async getHomePageData(): Promise<IGetHomePageData> {
        const response = await this.requestService.get(this.homeDataUrl);

        return { about: response.info };
    }

    // eslint-disable-next-line class-methods-use-this
    public async updateHomePageInfoData(info: string) {
        const FireBaseApiInstance = new FireBaseApi();

        return FireBaseApiInstance.updateHomePageInfoData(info);
    }
}
