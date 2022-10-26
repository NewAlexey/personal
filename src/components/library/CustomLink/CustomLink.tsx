import { ICustomLink } from "src/components/library/CustomLink/interfaces";
import * as Style from "src/components/library/CustomLink/style";

export const CustomLink = ({
    href,
    target,
    children,
}: ICustomLink): JSX.Element => (
    <Style.Link
        href={href}
        target={target}
    >
        {children}
    </Style.Link>
);
