import "styled-components";

import { IThemeColours } from "src/context/ThemeContext/interfaces";

declare module "styled-components" {
    export interface DefaultTheme extends IThemeColours {
        mainColour: string;
    }
}
