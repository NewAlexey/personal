import type { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

export default function checkSuperLogin(
    req: NextApiRequest,
    res: NextApiResponse,
): void {
    const {
        password,
        login,
    } = req.body as { login: string; password: string; };

    const decipher = CryptoJS.AES.decrypt(
        process.env.HEHESH as string,
        process.env.SECRET_KEY as string,
    );

    if (
        login === process.env.SUPER_LOGIN &&
        password === decipher.toString(CryptoJS.enc.Utf8)
    ) {
        res.status(200)
            .json({ message: "Authentication success!" });
    } else {
        res.status(403)
            .json({ message: "Authentication failed..." });
    }
}
