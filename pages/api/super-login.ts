import CryptoJS from "crypto-js";
import type { NextApiRequest, NextApiResponse } from "next";

const AUTH_SUCCESS_MESSAGE = "Authentication success!";

const AUTH_ERROR_MESSAGE = "Authentication failed...";

const AUTH_BAD_REQUEST_MESSAGE = "hello";

export interface IVerifyAdminDataResponse {
    message: string;
}

export default function verifyAdminData(
    req: NextApiRequest,
    res: NextApiResponse<IVerifyAdminDataResponse>,
): void | Response {
    const {
        password,
        login,
    } = req.body as { login?: string; password?: string; };

    if (!password || !login) {
        res.status(400)
            .json({ message: AUTH_BAD_REQUEST_MESSAGE });
    }

    const decipher = CryptoJS.AES.decrypt(
        process.env.HEHESH as string,
        process.env.SECRET_KEY as string,
    );

    if (
        login === process.env.SUPER_LOGIN &&
        password === decipher.toString(CryptoJS.enc.Utf8)
    ) {
        // const serializedCookie = serialize("test-27", "27", {
        //     httpOnly: true,
        //     maxAge: 60,
        //     path: "/",
        // });
        // res.setHeader("set-cookie", serializedCookie);

        res.status(200)
            .json({ message: AUTH_SUCCESS_MESSAGE });
    } else {
        res.status(403)
            .json({ message: AUTH_ERROR_MESSAGE });
    }
}
