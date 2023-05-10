import React, { useState } from "react";

export const InitialLoader = () => {
    const [showLoader, setShowLoader] = useState(true);

    return showLoader ? (
        <div
            className="initial-loader"
            onAnimationEnd={() => setShowLoader(false)}
        />
    ) : null;
};
