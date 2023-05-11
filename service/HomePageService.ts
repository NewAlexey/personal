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

    private FB_DATABASE_URL = process.env.FB_DB_URL;

    private URL_PATH_HOME_DATA = "home.json";

    static getInstance(): HomePageService {
        if (!this.instance) {
            this.instance = new HomePageService();
        }

        return this.instance;
    }

    public async getHomePageData(): Promise<IGetHomePageData> {
        if (!this.FB_DATABASE_URL) {
            throw Error("You can't get access to FireBase URL from front.");
        }

        const response = await this.requestService.get(`${this.FB_DATABASE_URL}/${this.URL_PATH_HOME_DATA}`);

        return { about: response?.info };
    }

    // eslint-disable-next-line class-methods-use-this
    public async updateHomePageInfoData(info: string) {
        const FireBaseApiInstance = await FireBaseApi.getInstance();

        return FireBaseApiInstance.updateHomePageAboutData(info);
    }
}
