import { useMemo } from "react";
import { useState } from "react";
import themeDefault from "../components/UI/Theme";
import ThemeColorModeContext from "./theme-colormode-context";

const ThemeColorModeProvider = (props) => {
  const [mode, setMode] = useState(localStorage.getItem('mode') ?? "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        if(localStorage.getItem('mode') === 'light')
          localStorage.setItem('mode', 'dark')
        else
        localStorage.setItem('mode', 'light')
      },
    }),
    []
  );

  const theme = useMemo(
    () => themeDefault(mode),
    [mode]
  );

  const themeContext = {
    theme: theme,
    colorMode: colorMode,
  };

  return (
    <ThemeColorModeContext.Provider value={themeContext}>
      {props.children}
    </ThemeColorModeContext.Provider>
  );
};

export default ThemeColorModeProvider;
