import React, { useState } from "react";
import {
    LIGHT_THEME,
    ThemeVariantsType,
} from "src/context/ThemeContext/interfaces";

interface IInitialLoader {
    appTheme: ThemeVariantsType;
}

export const InitialLoader = ({ appTheme }: IInitialLoader) => {
    const [showLoader, setShowLoader] = useState(true);

    return showLoader ? (
        <div
            className={`initial-loader ${appTheme === LIGHT_THEME
                ? "initial-loader__colour_light"
                : "initial-loader__colour_dark"}
            `}
            onAnimationEnd={() => setShowLoader(false)}
        />
    ) : null;
};
