import React, { useCallback, useMemo, useState } from "react";
import { ContextDelayValue } from "../../utils/types";

interface IAppContext {
  appContextValue: IInitialValue;
  setDelayValue: (delayValue: ContextDelayValue) => void;
  updateContextValue1: (value: string) => void;
  updateContextValue2: (value: string) => void;
  asyncUpdateContextValue: (value: string, timeout: number) => void;
}

interface IInitialValue {
  value1: string;
  value2: string;
  asyncValue: string;
  selectedDelayValue: ContextDelayValue;
}

const initialValue: IInitialValue = {
  value1: "Initial First value",
  value2: "Initial Second Value",
  asyncValue: "Initial Async Value",
  selectedDelayValue: "500",
};

const AppContext = React.createContext({} as IAppContext);

interface IAppContextProvider {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [appContextValue, setAppContextValue] =
    useState<IInitialValue>(initialValue);

  const setDelayValue = useCallback(
    (value: ContextDelayValue) =>
      setAppContextValue((prevState) => ({
        ...prevState,
        selectedDelayValue: value,
      })),
    []
  );

  const updateContextValue1 = useCallback(
    (value: string) =>
      setAppContextValue((prevState) => ({
        ...prevState,
        value1: value,
      })),
    []
  );

  const updateContextValue2 = useCallback(
    (value: string) =>
      setAppContextValue((prevState) => ({
        ...prevState,
        value2: value,
      })),
    []
  );

  const asyncUpdateContextValue = useCallback(
    (value: string, timeout: number) => {
      setTimeout(
        () =>
          setAppContextValue((prevState) => ({
            ...prevState,
            asyncValue: value,
          })),
        timeout
      );
    },
    []
  );

  const memoizedValue = useMemo(
    (): IAppContext => ({
      appContextValue,
      setDelayValue,
      updateContextValue1,
      updateContextValue2,
      asyncUpdateContextValue,
    }),
    [
      asyncUpdateContextValue,
      appContextValue,
      setDelayValue,
      updateContextValue1,
      updateContextValue2,
    ]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

export const useAppContextProvider = (): IAppContext =>
  React.useContext(AppContext);
