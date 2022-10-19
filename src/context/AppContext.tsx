import React, { createContext, FC, PropsWithChildren } from "react";

import { StateContext, useInitialState } from "@/hooks/useInitialState";

const AppContext = createContext<StateContext>({});

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default AppContext;
