import React, { Fragment } from "react";
import { Button, Typography } from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "styled-components";

import "react-toastify/dist/ReactToastify.min.css";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const EmptyPage = ({ title, message, showButton = true }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Fragment>
      <EmptyPageContainer>
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
        {showButton && (
          <Grid>
            {" "}
            <Button
              variant="outlined"
              color="primary"
              aria-label="gotohome-button"
              onClick={() => {
                redirect("/Ricerca");
              }}
            >
              {t("goToHomeButton")}
            </Button>
          </Grid>
        )}
      </EmptyPageContainer>
    </Fragment>
  );
};

export default EmptyPage;

const EmptyPageContainer = styled(Grid)({
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  width: "100%",
  fontSize: 48,
});
