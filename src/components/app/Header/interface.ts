import { NextApiRequestCookies } from "next/dist/server/api-utils";

export interface IHeader {
    cookie: NextApiRequestCookies;
}
