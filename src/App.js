import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppContextProvider } from "./store/AppContextProvider";
import { RecoilRoot } from "recoil";
import { router } from "./components/Router/Router";
import { useContext, useEffect } from "react";

import i18n from "./i18next/i18n";

import React from "react";
import ResizeDetector from "react-resize-detector";
import ThemeColorModeContext from "./store/theme-colormode-context";
import { useClearCache } from "react-clear-cache";

function App() {
  const themeColorMode = useContext(ThemeColorModeContext);
  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  useEffect(() => {
    if (!isLatestVersion) emptyCacheStorage();
    /*if (!localStorage.getItem('mode'))
      localStorage.setItem('mode', (window.matchMedia('(prefers-color-scheme: dark)').matches || window.matchMedia('(prefers-dark-interface)').matches) ? 'dark' : 'light');*/
    if (!localStorage.getItem("mode")) localStorage.setItem("mode", "light");
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeColorMode.theme}>
        <CssBaseline enableColorScheme />
        <I18nextProvider i18n={i18n}>
          <ResizeDetector handleWidth>
            <AppContextProvider>
              <RouterProvider router={router}></RouterProvider>
            </AppContextProvider>
          </ResizeDetector>
        </I18nextProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
