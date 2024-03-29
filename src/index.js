import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeColorModeProvider from "./store/ThemeColorModeProvider";
import ErrorPage from "./components/Error/ErrorPage";
import { ErrorBoundary } from 'react-error-boundary';

//setLocale(it);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary FallbackComponent={ErrorPage}>
    <StyledEngineProvider injectFirst>
      <ThemeColorModeProvider>
        <App />
      </ThemeColorModeProvider>
    </StyledEngineProvider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
