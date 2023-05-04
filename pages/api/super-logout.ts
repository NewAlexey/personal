import type { NextApiRequest, NextApiResponse } from "next";
import { AuthCookieService } from "service/AuthCookieService";

const AUTH_SUCCESS_MESSAGE = "Logout success!";

export interface ILogoutAdminResponse {
    message: string;
}

export default function logoutAdmin(
    req: NextApiRequest,
    res: NextApiResponse<ILogoutAdminResponse>,
): void | Response {
    const { cookies } = req;

    const AuthCookieServiceInstance = new AuthCookieService();
    const isAuthByCookie = AuthCookieServiceInstance.isAuthorizeByCookie(cookies);

    if (!isAuthByCookie) {
        res.redirect("/404");

        return;
    }

    res.setHeader(AuthCookieServiceInstance.COOKIE_SET_HEADER, AuthCookieServiceInstance.getCleansingCookieValue());
    res.status(200)
        .json({ message: AUTH_SUCCESS_MESSAGE });
}
