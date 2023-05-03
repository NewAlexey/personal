import CryptoJS from "crypto-js";
import type { NextApiRequest, NextApiResponse } from "next";
import { AuthCookieService } from "service/AuthCookieService";

const AUTH_SUCCESS_MESSAGE = "Authentication success!";

const AUTH_ERROR_MESSAGE = "Authentication failed...";

export interface IVerifyAdminDataResponse {
    message: string;
}

interface IBody {
    login?: string;
    password?: string;
}

export default function verifyAdminData(
    req: NextApiRequest,
    res: NextApiResponse<IVerifyAdminDataResponse>,
): void | Response {
    const {
        password,
        login,
    } = req.body as IBody;

    if (!password || !login) {
        res.redirect("/404");

        return;
    }

    const decipher = CryptoJS.AES.decrypt(
        process.env.HEHESH,
        process.env.SECRET_KEY,
    );

    if (
        login === process.env.SUPER_LOGIN &&
        password === decipher.toString(CryptoJS.enc.Utf8)
    ) {
        const CookieService = new AuthCookieService();

        res.setHeader(
            CookieService.COOKIE_SET_HEADER,
            CookieService.getAuthCookies(),
        );

        res.status(200)
            .json({ message: AUTH_SUCCESS_MESSAGE });
    } else {
        res.status(403)
            .json({ message: AUTH_ERROR_MESSAGE });
    }
}
