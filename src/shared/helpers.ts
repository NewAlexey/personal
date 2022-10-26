import { NextApiRequestCookies } from "next/dist/server/api-utils";

export function isActiveAdminCookie(cookie: NextApiRequestCookies): boolean {
    return cookie?.[`${process.env.NEXT_PUBLIC_SUPER_LESHA}`] === "ETODA";
}
