import {
    Dispatch, SetStateAction, useCallback, useState
} from "react";

interface IUseError {
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    clearErrorMessage: () => void;
    smoothClearErrorMessage: () => void;
    setSmoothClearErrorMessage: (errorMessage: string) => void;
}

export const useError = (): IUseError => {
    const [error, setError] = useState("");

    const clearErrorMessage = useCallback(() => (
        setError("")
    ), []);

    const smoothClearErrorMessage = useCallback(() => {
        setTimeout(() => {
            setError("");
        }, 1500);
    }, []);

    const setSmoothClearErrorMessage = useCallback((errorMessage: string) => {
        setError(errorMessage);
        smoothClearErrorMessage();
    }, [smoothClearErrorMessage]);

    return {
        error,
        setError,
        clearErrorMessage,
        smoothClearErrorMessage,
        setSmoothClearErrorMessage,
    };
};
