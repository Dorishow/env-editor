import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useReduxState } from "@hooks/reduxHooks";
import { AuthPanel, NavigationPanel } from "@components/organisms";
import { Loading } from "@components/molecules";

export const AppRouter = () => {
  const { isLogged } = useReduxState().auth;
  const { isLoading } = useReduxState().loading;

  return (
    <BrowserRouter>
      {isLoading && <Loading />}

      {!isLogged ? (
        <NavigationPanel></NavigationPanel>
      ) : (
        <AuthPanel></AuthPanel>
      )}
    </BrowserRouter>
  );
};
