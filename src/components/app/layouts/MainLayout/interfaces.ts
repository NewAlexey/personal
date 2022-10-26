import React from "react";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

export interface IMainLayout {
    children: React.ReactElement;
    cookies: NextApiRequestCookies;
}
