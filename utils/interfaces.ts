import { NextApiRequestCookies } from "next/dist/server/api-utils";

export interface IGetServerSideDefaultProps {
  cookie: NextApiRequestCookies;
}

export interface IHeaderRoute {
  url: string;
  title: string;
}

export interface ILoginData {
  login: string;
  password: string;
}

export interface ISuperData {
  message: string;
}
