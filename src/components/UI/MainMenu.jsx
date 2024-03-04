import { Box, Divider, Toolbar, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';

const openedMixin = (theme) => ({
  width: theme.drawerMainMenuWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: theme.drawerMainMenuWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MainMenu = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={props.openDrawer}
      PaperProps={{
        elevation: 8,
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "hidden" }}>
        <List aria-label="main mailbox folders">

          <Tooltip
            title={!props.openDrawer ? t("Home") : ""}
            placement="right"
          >
            <ListItem
              key="Home"
              disablePadding
              selected={location?.pathname.startsWith("/Home")}
            >
              <ListItemButton
                onClick={() => {
                  navigate("Home");
                }}
              >
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={t("Home")} />
              </ListItemButton>
            </ListItem>
          </Tooltip>

          <Divider />

        </List>
      </Box>
    </Drawer>
  );
};

export default MainMenu;
