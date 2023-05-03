import type { NextApiRequest, NextApiResponse } from "next";
import { AuthCookieService } from "service/AuthCookieService";

export interface IAuthVariables {
    key: string;
    url: string;
}

export default function getAuthVariables(
    req: NextApiRequest,
    res: NextApiResponse<IAuthVariables>,
): void | Response {
    const { cookies } = req;

    const AuthCookieServiceInstance = new AuthCookieService();
    const isAuthByCookie = AuthCookieServiceInstance.isAuthorizeByCookie(cookies);

    if (!isAuthByCookie) {
        res.redirect("/404");

        return;
    }

    const apiKey = process.env.FB_API_KEY;
    const apiUrl = process.env.FB_DB_URL;

    if (!apiUrl || !apiKey) {
        res.status(404);

        return;
    }

    res.status(200)
        .json({
            key: apiKey,
            url: apiUrl,
        });
}
