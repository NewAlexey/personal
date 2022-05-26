import React from "react";

import * as Style from "./Style";
import { headerRouteList } from "../../../../../utils/constants";
import { HeaderLinkItem } from "./HeaderLinkItem";

export const Navigation = (): JSX.Element => (
  <Style.SiteNavigation>
    {headerRouteList.map(({ url, title }) => (
      <HeaderLinkItem key={url} url={url} title={title} />
    ))}
  </Style.SiteNavigation>
);
