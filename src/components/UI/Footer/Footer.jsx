import { Typography } from "@mui/material";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useTheme } from "@emotion/react";
import hexToRgba from "hex-to-rgba";

const Footer = () => {
  return (
    <FooterContainer>
      <Grid>
        <Typography variant="span">
          Copyright © 2023 All rights reserved
        </Typography>
      </Grid>
      <ReleaseGrid>
        <Typography variant="span">
          <span>Version a</span> date
        </Typography>
      </ReleaseGrid>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Grid)(() => ({
  position: "fixed",
  bottom: 0,
  overflow: "hidden",
  fontSize: 12,
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "13px",
  paddingBottom: "5px",
  display: "flex",
  width: "100%",
  gap: "5px",
  height: useTheme().footerHeight,
  backgroundColor: useTheme().palette.background.default,
  zIndex: 1000,
}));

const ReleaseGrid = styled(Grid)(() => ({
  marginLeft: 16,
  background: hexToRgba(useTheme().palette.footerRelease.main, 0.1),
  padding: "2px 16px",
  borderRadius: 16,
  "& span": {
    fontWeight: 700,
  },
}));
