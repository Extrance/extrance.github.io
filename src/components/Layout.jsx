import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";

import MainContainer from "./UI/MainContainer";
import Header from "./UI/Header/Header";

function Layout() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BoxStyle>
      <Header
        title={t("applicationName")}
        handleDrawerOpen={handleDrawerOpen}
        openDrawer={open}
        handleDrawerClose={handleDrawerClose}
      />
      <MainContainer open={open}>
        <Outlet />
      </MainContainer>
    </BoxStyle>
  );
}

export default Layout;

const BoxStyle = styled(Box)(() => ({
  paddingTop: "60px",
}));
