import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../store/ResizeProvider";

import styled from "@emotion/styled";

import MainContainer from "./UI/MainContainer";
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";

//import { useTheme } from "@emotion/react";

function Layout() {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  //const theme = useTheme();

  const [open, setOpen] = useState(windowSize.width > 1000);

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
        <Footer />
      </MainContainer>
    </BoxStyle>
  );
}

export default Layout;

const BoxStyle = styled(Box)(() => ({
  paddingTop: "60px",
  height: "100%",
  width: "100%",
}));
