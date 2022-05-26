import React from "react";

import { headerRouteList } from "../../../helpers/constants";
import * as Style from "./Style";
import { HeaderLinkItem } from "./Components";

export const Header = (): JSX.Element => (
  <Style.HeaderComponent>
    <Style.SiteNavigation>
      {headerRouteList.map(({ url, title }) => (
        <HeaderLinkItem key={url} url={url} title={title} />
      ))}
    </Style.SiteNavigation>
  </Style.HeaderComponent>
);
