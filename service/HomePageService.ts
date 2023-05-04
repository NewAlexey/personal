import { FireBaseApi } from "integrations/FireBaseApi";
import { FetchApi } from "integrations/FetchApi";

interface IGetHomePageData {
    about: string;
}

interface IHomePageService {
    getHomePageData: () => Promise<IGetHomePageData>;
    updateHomePageInfoData: (info: string) => Promise<{ message: string; }>;
}

export class HomePageService implements IHomePageService {
    static instance: HomePageService;

    private requestService = FetchApi.getInstance();

    private HOME_DATA_URL_PATH = "https://portfolio-58d57-default-rtdb.europe-west1.firebasedatabase.app/home.json";

    static getInstance(): HomePageService {
        if (!this.instance) {
            this.instance = new HomePageService();
        }

        return this.instance;
    }

    public async getHomePageData(): Promise<IGetHomePageData> {
        const response = await this.requestService.get(this.HOME_DATA_URL_PATH);

        return { about: response.info };
    }

    // eslint-disable-next-line class-methods-use-this
    public async updateHomePageInfoData(info: string) {
        const FireBaseApiInstance = await FireBaseApi.getInstance();

        return FireBaseApiInstance.updateHomePageAboutData(info);
    }
}
