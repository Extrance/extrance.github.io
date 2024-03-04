import React, { useState, useEffect, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Collapse } from "reactstrap";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useRouteError } from "react-router-dom";

import styled from "styled-components";
import log from "loglevel";

import "react-toastify/dist/ReactToastify.min.css";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const ErrorPage = ({
  code,
  title,
  message,
  error,
  showButton = true,
  icon = {},
}) => {
  const [showStack, setShowStack] = useState(false);
  const navigate = useNavigate();
  const errorRoute = useRouteError();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Ball's Collection";
  }, [])

  useEffect(() => {
    log.error(error);
  }, []);

  let titleDefault = t("genericErrorTitle");
  let messageDefault = t("genericErrorMessage");
  let codeDefault;

  if (errorRoute?.status === 500) {
    messageDefault = errorRoute.data.message;
    codeDefault = 500;
  }

  if (errorRoute?.status === 404) {
    titleDefault = t("notFoundEorrorTitle");
    messageDefault = t("notFoundEorrorMessage");
    codeDefault = 404;
  }

  if (errorRoute?.status === 404) {
    titleDefault = false;
    messageDefault = false;
    codeDefault = false;
  }

  const handleStackDoubleClick = () => {
    navigator.clipboard.writeText(error.stack);
    toast("💾 Stack copiato negli appunti.", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
    });
  };

  code = code ? code : codeDefault;
  title = title ? title : titleDefault;
  message = message ? message : messageDefault;

  return (
    <Fragment>
      <ErrorPageContainer>
        <Grid>{/*<FontAwesomeIcon icon={icon} /> */}</Grid>
        {code && (
          <Grid>
            <Typography variant="h1" fontWeight={800}>
              {code}
            </Typography>
          </Grid>
        )}
        {title && (
          <Grid>
            <Typography variant="h4">{title}</Typography>
          </Grid>
        )}
        {message && (
          <Grid>
            <Typography variant="body1">{message}</Typography>
          </Grid>
        )}
        {error && (
          <Grid>
            <Typography variant="body1">{t("genericErrorMessage")}</Typography>
          </Grid>
        )}
        {error && (
          <ErrorMessageDiv
            className="fe-error"
            onClick={() => setShowStack(!showStack)}
          >
            {error.message}
          </ErrorMessageDiv>
        )}
        {error && (
          <Collapse isOpen={showStack}>
            <ErrorStackDiv onDoubleClick={handleStackDoubleClick}>
              <pre>
                <code>{error.stack}</code>
              </pre>
            </ErrorStackDiv>
          </Collapse>
        )}
        {showButton && (
          <Grid>
            <Button
              variant="outlined"
              color="primary"
              aria-label="gotohome-button"
              onClick={() => {
                navigate("/Ricerca");
              }}
            >
              {t("goToHomeButton")}
            </Button>
          </Grid>
        )}
      </ErrorPageContainer>
      <ToastContainer />
    </Fragment>
  );
};

export default ErrorPage;

const ErrorPageContainer = styled(Grid)({
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  width: "100%",
  fontSize: 48,
});

const ErrorMessageDiv = styled.div({
  fontSize: 16,
  "&.fe-error": {
    cursor: "pointer",
  },
});
const ErrorStackDiv = styled.div({
  fontSize: 11,
  cursor: "pointer",
});
