import { FetchApi } from "integrations/FetchApi";

interface IGetAppSettings {
    mainColour: string;
}

export class AppSettingsService {
    static instance: AppSettingsService;

    private requestService = FetchApi.getInstance();

    private FB_DATABASE_URL = process.env.FB_DB_URL;

    private URL_PATH_APP_SETTINGS_DATA = "appSettings.json";

    static getInstance(): AppSettingsService {
        if (!this.instance) {
            this.instance = new AppSettingsService();
        }

        return this.instance;
    }

    public async getAppSettings(): Promise<IGetAppSettings> {
        if (!this.FB_DATABASE_URL) {
            throw Error("You can't get access to FireBase URL from front.");
        }

        const response = await this.requestService.get(`${this.FB_DATABASE_URL}/${this.URL_PATH_APP_SETTINGS_DATA}`);

        return { mainColour: response?.mainColour };
    }
}
