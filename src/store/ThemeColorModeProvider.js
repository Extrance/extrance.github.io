import { useMemo } from "react";
import { useState } from "react";
import themeDefault from "../components/UI/Theme";
import ThemeColorModeContext from "./theme-colormode-context";

const ThemeColorModeProvider = (props) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
