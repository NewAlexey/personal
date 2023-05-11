import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { LayoutType } from "src/components/app/layouts/LayoutType";
import { ThemeVariantsType } from "src/context/ThemeContext/interfaces";

export interface INextPageDefaultProps {
    cookies?: NextApiRequestCookies;
    theme?: ThemeVariantsType;
    layoutType?: LayoutType;
    isAuthorized?: boolean;
    isShowAuthButton?: boolean;
    mainColour?: string;
}
