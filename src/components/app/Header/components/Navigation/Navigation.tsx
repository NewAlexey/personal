import * as Style from "src/components/app/Header/components/Navigation/style";
import {
    LinkItem,
} from "src/components/app/Header/components/Navigation/LinkItem/LinkItem";
import { HEADER_ROUTES } from "src/components/app/Header/components/routes";

export const Navigation = (): JSX.Element => (
    <Style.SiteNavigation>
        {HEADER_ROUTES.map(({
            url,
            title,
        }) => (
            <LinkItem
                key={url}
                url={url}
                title={title}
            />
        ))}
    </Style.SiteNavigation>
);
