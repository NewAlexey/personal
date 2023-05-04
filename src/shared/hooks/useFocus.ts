import React, { useEffect } from "react";

export function useFocus(elementRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>) {
    useEffect(() => {
        if (elementRef?.current) {
            elementRef.current.focus();
        }
    }, [elementRef]);
}
