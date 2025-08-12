import {
  Box,
  IconButton,
  ListItemIcon,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  Switch,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../store/ResizeProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { BULLET } from "../../Router/paths";
import { useContext, useEffect, useState } from "react";

import styled from "@emotion/styled";
import ListItemText from "@mui/material/ListItemText";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ThemeColorModeContext from "../../../store/theme-colormode-context";
import MainMenu from "../MainMenu";
import Extrance_D from '../../../imgs/Extrance_D.png';
import Extrance_L from '../../../imgs/Extrance_L.png';
import LegoIcon from "../Icons/LegoIcon";
import RubikIcon from "../Icons/RubikIcon";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#ffd4d3",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#FF9800",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#ffd4d3",
    borderRadius: 20 / 2,
  },
}));

const Header = ({
  title,
  openDrawer,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const theme = useTheme();
  const themeColorMode = useContext(ThemeColorModeContext);
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(windowSize.width < 600);
  const navigate = useNavigate();

  const path = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .slice(0, -1);

  useEffect(() => {
    setIsMobile(windowSize.width < 600);
  }, [windowSize]);

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
          {!isMobile ? (
            <Tooltip title={t("menu")} placement="bottom-start">
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
            </Tooltip>
          ) : (
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu-drawer"
              onClick={handleClick}
              style={{ marginRight: 0 }}
              //sx={{ mr: 2, ...(window.innerWidth < 1200 && { display: "none" }) }}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {path.length > 0 ? (
            <Tooltip title={t("backButton")} placement="bottom-start">
              <IconButton
              color="primary"
                //style={{ backgroundColor: "transparent" }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <GradientLogoButton
              aria-label="Home"
              tabIndex={0}
              onClick={() => navigate("/")}
            >
              <img src={theme.palette.mode === "dark" ? Extrance_D : Extrance_L} style={{ width: 40 }} alt="Logo" />
            </GradientLogoButton>

          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <Tooltip
            title={
              useTheme().palette.mode === "dark"
                ? t("lightModeLabel")
                : t("blackModeLabel")
            }
            placement="bottom-start"
          >
            <MaterialUISwitch
              checked={theme.palette.mode === "dark"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { themeColorMode.colorMode.toggleColorMode() }
              }}
              onChange={themeColorMode.colorMode.toggleColorMode}
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
      {!isMobile && <MainMenu openDrawer={openDrawer} />}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ marginTop: "10px" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          selected={location?.pathname.startsWith(BULLET.WHOAMI)}
          onClick={() => {
            handleClose();
            navigate(BULLET.WHOAMI);
          }}
        >
          <ListItemIcon>
            <PersonSearchIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("WhoAmI")} />
        </MenuItem>
        <MenuItem
          selected={location?.pathname.startsWith(BULLET.BRICKS)}
          onClick={() => {
            handleClose();
            navigate(BULLET.BRICKS);
          }}
        >
          <ListItemIcon>
            <LegoIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("LEGO")} />
        </MenuItem>
        {/* <MenuItem
          selected={location?.pathname.startsWith(BULLET.PUZZLES)}
          onClick={() => {
            handleClose();
            navigate(BULLET.PUZZLES);
          }}
        >
          <ListItemIcon>
            <RubikIcon color="inherit" />
          </ListItemIcon>
          <ListItemText primary={t("Puzzles")} />
        </MenuItem> */}
        <MenuItem
          selected={location?.pathname.startsWith(BULLET.WISHLIST)}
          onClick={() => {
            handleClose();
            navigate(BULLET.WISHLIST);
          }}
        >
          <ListItemIcon>
            <CardGiftcardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("Wishlist")} />
        </MenuItem>
      </Menu>
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


const GradientLogoButton = styled(IconButton)(({ theme }) => ({
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '50%',
  transition: 'opacity 0.2s',
  '&:hover, &:focus': {
    opacity: 0.7,
  },
  '& img': {
    position: 'relative',
    zIndex: 1,
  },
  '&:hover::after, &:focus::after': {
    background: 'linear-gradient(90deg, #b388ff 0%, #ff80ab 100%)',
    opacity: 1,
  },
}));