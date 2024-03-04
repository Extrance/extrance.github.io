import { useSnackbar } from "notistack";
import { createContext, useCallback, useContext, useState } from "react";

const AlertContext = createContext({
  showErrorAlert: ({ message }) => {},
  showWarningAlert: ({ message }) => {},
  showInfoAlert: ({ message }) => {},
  showSuccessAlert: ({ message }) => {},
});

const AlertProvider = (props) => {
  const [key, setKey] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const alertObj = (message, type) => {
    return {
      message: message,
      transitionDuration: 500,
      variant: type,
      elevation: 6,
      preventDuplicate: true,
    };
  };

  const showErrorAlert = useCallback(
    (message) => {
      const key = enqueueSnackbar(alertObj(message, "error"));
      setKey(key);
    },
    [setKey]
  );

  const showWarningAlert = useCallback(
    (message) => {
      const key = enqueueSnackbar(alertObj(message, "warning"));
      setKey(key);
    },
    [setKey]
  );

  const showInfoAlert = useCallback(
    (message) => {
      const key = enqueueSnackbar(alertObj(message, "info"));
      setKey(key);
    },
    [setKey]
  );

  const showSuccessAlert = useCallback(
    (message) => {
      const key = enqueueSnackbar(alertObj(message, "success"));
      setKey(key);
    },
    [setKey]
  );

  const closeAlert = useCallback(
    (event, reason) => {
      closeSnackbar(key);
    },
    [setKey]
  );

  return (
    <AlertContext.Provider
      value={{
        showErrorAlert,
        showWarningAlert,
        showInfoAlert,
        showSuccessAlert,
      }}
      {...props}
    >
      {props.children}
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={closeAlert}
        //anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          elevation={6}
          onClose={closeAlert}
          variant="filled"
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar> */}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    console.error("useAlert must be used within a AlertProvider");
  }

  return context;
};

export { AlertProvider, useAlert };
