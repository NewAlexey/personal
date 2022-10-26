import React from "react";

import { headerRouteList } from "utils/constants";
import * as Style from "./Style";
import { HeaderLinkItem } from "./HeaderLinkItem";

export const Navigation = (): JSX.Element => (
    <Style.SiteNavigation>
        {headerRouteList.map(({
            url,
            title,
        }) => (
            <HeaderLinkItem
                key={url}
                url={url}
                title={title}
            />
        ))}
    </Style.SiteNavigation>
);
