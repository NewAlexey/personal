import type { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

export default function checkSuperLogin(
    req: NextApiRequest,
    res: NextApiResponse,
): void {
    const data = req.body as { login: string; password: string; };

    const decipher = CryptoJS.AES.decrypt(
        process.env.HEHESH as string,
        process.env.SECRET_KEY as string,
    );

    if (
        data.login === process.env.SUPER_LOGIN &&
        data.password === decipher.toString(CryptoJS.enc.Utf8)
    ) {
        res.status(200)
            .json({ message: "All good!" });
    } else {
        res.status(403)
            .json({ message: "All very bad..." });
    }
}
