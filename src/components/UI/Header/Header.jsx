import styled from "@emotion/styled";
import {
  Box,
  Chip,
  IconButton,
  ListItemIcon,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Divider,
  Menu,
  Avatar,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTheme } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ThemeColorModeContext from "../../../store/theme-colormode-context";
import MainMenu from "../MainMenu";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useTranslation } from "react-i18next";
import {
  getUsername,
  getUsernameInitials,
} from "../../../util/auth/authStorage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/*
  Oggetto Header
*/

const Header = ({
  title,
  logo,
  openDrawer,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const theme = useTheme();
  const themeColorMode = useContext(ThemeColorModeContext);
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawer = () => {
    if (openDrawer) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="header"
        size="medium"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={8}
      >
        <Toolbar variant="dense">
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu-drawer"
            onClick={handleDrawer}
            //sx={{ mr: 2, ...(window.innerWidth < 1200 && { display: "none" }) }}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <LogoImg src={logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
            <Chip
              label={process.env.REACT_APP_ENV_LABEL}
              color="primary"
              sx={{ ml: "10px" }}
              size="medium"
            />
          </Typography>
          
          
          {<Tooltip
            title={
              useTheme().palette.mode === "dark"
                ? t("lightModeLabel")
                : t("blackModeLabel")
            }
            placement="bottom"
          >
            <IconButton
              sx={{ ml: 1 }}
              onClick={themeColorMode.colorMode.toggleColorMode}
              size="small"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
              </Tooltip>}
        </Toolbar>
      </AppBar>
      <MainMenu openDrawer={openDrawer} />
    </Box>
  );
};

export default Header;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const LogoImg = styled.img(() => ({
  width: "auto",
  height: "40px",
  marginRight: "10px",
}));

const TextUserStyle = styled(Typography)(() => ({
  margin: "0",
  fontSize: 14,
  fontWeight: "bold",
  textAlign: "right",
}));
