import { createContext, useContext, useEffect, useState } from "react";

const ResizeContext = createContext({
  height: () => {},
  width: () => {},
});

const ResizeProvider = (props) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, [window.innerWidth, window.innerHeight]);

  return (
    <ResizeContext.Provider value={{ height, width }} {...props}>
      {props.children}
    </ResizeContext.Provider>
  );
};

const useWindowSize = () => {
  const context = useContext(ResizeContext);
  if (context === undefined) {
    console.error("useDialog must be used within a ResizeProvider");
  }

  return context;
};

export { ResizeProvider, useWindowSize };
