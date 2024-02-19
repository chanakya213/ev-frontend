import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { darkTheme, GlobalStyles, lightTheme } from "./theme";
import { useRoutes } from "react-router-dom";
import { LStorage } from "./helpers";
import routes from "./routes";

function App(props) {
  const userData = LStorage.getUserData();
  const routing = useRoutes(routes(Boolean(userData?.token)))

  return (
    <ThemeProvider
      theme={props?.theme?.mode === "light" ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    theme: state?.theme,
    user: state?.user,
  };
}

export default connect(mapStateToProps)(App);
