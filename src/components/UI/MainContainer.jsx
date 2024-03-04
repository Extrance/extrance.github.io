import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useWindowSize } from "../../store/ResizeProvider";

const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${theme.drawerMainMenuWidth}px`,
  }),
  marginBottom: "35px",
  height: useWindowSize().height - theme.footerHeight - theme.headerHeight,
}));

export default MainContainer;
