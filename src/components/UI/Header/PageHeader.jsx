import { Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import Breadcrumbs from "../../Router/Breadcrumbs";

const PageHeader = (props) => {
  return (
    <BoxStyle>
      <Breadcrumbs />
      <Typography variant="hComponent">{props.title}</Typography>
    </BoxStyle>
  );
};

export default PageHeader;

const BoxStyle = styled.header((Box) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  position: "fixed",
  width: "100%",
  height: useTheme().pageHeaderHeight,
  top: "48px",
  left: 0,
  right: 0,
  backgroundColor:
    useTheme().palette.mode === "dark"
      ? useTheme().palette.primary.dark
      : useTheme().palette.primary.main,
  zIndex: 1000,
}));