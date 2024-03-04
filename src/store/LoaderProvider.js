import { Backdrop, CircularProgress } from "@mui/material";
import { createContext, useCallback, useContext } from "react";
import { useRecoilState } from "recoil";
import { atomLoader } from "../atoms/atomsLoader";

const LoaderContext = createContext({
  openLoader: () => {},
  closeLoader: () => {},
});

const LoaderProvider = (props) => {
  const [isLoading, setIsLoading] = useRecoilState(atomLoader);

  const openLoader = useCallback(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  const closeLoader = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  /*return (
    <LoaderContext.Provider value={{ openLoader, closeLoader }} {...props}>
      {props.children}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            margin: "50px",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}
    </LoaderContext.Provider>
  );*/

  return (
    <LoaderContext.Provider value={{ openLoader, closeLoader }} {...props}>
      {props.children}
      {isLoading && (
        <Backdrop
          style={{ zIndex: 1000000 }}
          sx={{ color: "#fff", backgroundColor: "transparent" }}
          open={isLoading}
        >
          {<CircularProgress color="primary" />}
        </Backdrop>
      )}
    </LoaderContext.Provider>
  );
};

const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    console.error("useLoader must be used within a LoaderProvider");
  }

  return context;
};

export { LoaderProvider, useLoader };
