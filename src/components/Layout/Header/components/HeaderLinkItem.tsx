import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

import * as Style from "./Style";

interface IHeaderLinkItem {
  url: string;
  title: string;
}

export const HeaderLinkItem = ({
  url,
  title,
}: IHeaderLinkItem): JSX.Element => {
  const router = useRouter();

  return (
    <Link href={url}>
      <Style.LinkItem isActive={router.asPath === url}>{title}</Style.LinkItem>
    </Link>
  );
};
