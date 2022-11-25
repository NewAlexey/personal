import { useRouter } from "next/router";
import Link from "next/link";

import * as Style from "src/components/app/Header/components/LinkItem/style";

interface ILinkItem {
    url: string;
    title: string;
}

export const LinkItem = ({
    url,
    title,
}: ILinkItem): JSX.Element => {
    const router = useRouter();

    return (
        <Link href={url}>
            <Style.LinkItem
                isActive={router.asPath === url}
            >
                {title}
            </Style.LinkItem>
        </Link>
    );
};
