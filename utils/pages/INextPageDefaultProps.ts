import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { LayoutType } from "src/components/app/layouts/LayoutType";

export interface INextPageDefaultProps {
    cookies?: NextApiRequestCookies;
    theme?: string;
    layoutType?: LayoutType;
}
