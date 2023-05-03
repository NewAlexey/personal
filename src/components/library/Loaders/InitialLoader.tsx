import React from "react";

export const InitialLoader = ({ setShowLoader }: { setShowLoader: React.Dispatch<React.SetStateAction<boolean>> }) => (
    <div
        className="initial-loader"
        onAnimationEnd={() => setShowLoader(false)}
    />
);
