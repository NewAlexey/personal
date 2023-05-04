import { useEffect, useState } from "react";

import { useMount } from "src/shared/hooks";
import * as Style from "./Style";

interface ILoadingScreen {
    isLoading: boolean;
    hideLoader: () => void;
}

export const LoadingComponent = ({
    isLoading,
    hideLoader,
}: ILoadingScreen) => {
    const isMount = useMount();
    const [isShowLoader, setIsShowLoader] = useState(false);

    useEffect(() => {
        if (isLoading) {
            return;
        }

        setIsShowLoader(false);
    }, [isLoading]);

    useEffect(() => {
        if (isMount) {
            setIsShowLoader(true);
        }
    }, [isMount]);

    return (
        <Style.LoadingBackdrop
            isShow={isShowLoader}
            onTransitionEnd={() => {
                if (isLoading) {
                    return;
                }

                hideLoader();
            }}
        >
            <Style.Loader isShow={isShowLoader} />
        </Style.LoadingBackdrop>
    );
};
