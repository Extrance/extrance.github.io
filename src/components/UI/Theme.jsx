import { createTheme, Zoom } from "@mui/material";
import {
  ITEM_HEIGHT,
  ITEM_PADDING_TOP,
  MENU_ITEMS,
  MOBILE_ITEM_HEIGHT,
} from "../../constants/Constants";

export const arcRed = "#D32F2F";
export const arcGreen = "#008248";
export const arcWhite = "#FFFFFF";
export const arcOrange = "#FF9800";
export const arcGreyLight = "#ECEFF1";
export const arcGrey = "#9e9e9e";
export const arcBlue = "#2196F3";
export const arcDarkBlue = "#0A2744";
export const arcGreyDark = "#424242";
export const arcScarlet = "#500000";

export const arcReply = "#e73e27";

const getThemePaletteExtrance = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      background: {
        default: arcGreyLight,
      },
      header: {
        main: arcWhite,
      },
      headerChip: {
        main: arcReply,
        dark: arcReply,
        light: arcReply,
      },
      footer: {
        main: arcGreyLight,
      },
      footerRelease: {
        main: arcGrey,
      },
      table: {
        main: arcWhite,
      },
      componentHeaderText: {
        main: arcGreyLight,
      },
      noButton: {
        main: arcGrey,
      },
      inputField: {
        main: arcWhite,
      },
      primary: {
        main: arcOrange,
        contrastText: arcWhite,
      },
      secondary: {
        main: arcBlue,
      },
      success: {
        main: arcGreen,
      },
      error: {
        main: arcRed,
      },
      down: {
        main: arcRed,
      },
      warning: {
        main: arcOrange,
        contrastText: arcWhite,
      },
    },
  });
};

const themeDefault = (mode) => {
  const themePalette =
    process.env.REACT_APP_ENV_USER === "extrance"
      ? getThemePaletteExtrance(mode)
      : getThemePaletteExtrance(mode);
  return createTheme(themePalette, {
    drawerMainMenuWidth: 240,
    footerHeight: 35,
    haderHeight: 60,
    pageHeaderHeight: 41,
    pageHeight: window.innerHeight,
    palette: {
      background: {
        default:
          themePalette.palette.mode === "dark"
            ? arcGreyDark
            : themePalette.palette.background.default,
      },
    },
    typography: {
      fontFamily: "Roboto, Arial",
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h2",
            subtitle2: "h2",
            body1: "span",
            body2: "span",
          },
        },
        styleOverrides: {
          hComponent: {
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "100%",
            //textTransform: "uppercase",
            color:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.componentHeaderText.light
                : themePalette.palette.componentHeaderText.main,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "contained" &&
              (themePalette.palette.mode === "dark"
                ? {
                    backgroundColor:
                      themePalette.palette[ownerState.color]?.light,
                  }
                : {
                    backgroundColor:
                      themePalette.palette[ownerState.color]?.main,
                  })),
            ...(ownerState.variant === "outlined" &&
              (themePalette.palette.mode === "dark"
                ? {
                    color: themePalette.palette[ownerState.color]?.light,
                    borderColor: themePalette.palette[ownerState.color]?.light,
                  }
                : {
                    color: themePalette.palette[ownerState.color]?.main,
                    borderColor: themePalette.palette[ownerState.color]?.main,
                  })),
            ...(ownerState.variant === "text" &&
              (themePalette.palette.mode === "dark"
                ? {
                    color: themePalette.palette[ownerState.color]?.light,
                    padding: "0px 0px",
                  }
                : {
                    color: themePalette.palette[ownerState.color]?.main,
                    padding: "0px 0px",
                  })),
          }),
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.primary.light
                : themePalette.palette.primary.main,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color:
                themePalette.palette.mode === "dark"
                  ? themePalette.palette.primary.light
                  : themePalette.palette.primary.main,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "contained" &&
              (themePalette.palette.mode === "dark"
                ? {
                    backgroundColor:
                      themePalette.palette[ownerState.color]?.light,
                    border: 'none',
                    /*borderColor: themePalette.palette[ownerState.color]?.light,*/
                  }
                : {
                    backgroundColor:
                      themePalette.palette[ownerState.color]?.main,
                    border: 'none',
                    /* borderColor: themePalette.palette[ownerState.color]?.light, */
                  })),
            ...(ownerState.variant === "outlined" &&
              (themePalette.palette.mode === "dark"
                ? {
                    color: themePalette.palette[ownerState.color]?.light,
                    border: 'none',
                    /* borderColor: themePalette.palette[ownerState.color]?.light, */
                  }
                : {
                    color: themePalette.palette[ownerState.color]?.main,
                    border: 'none',
                    /* borderColor: themePalette.palette[ownerState.color]?.light, */
                  })),
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(themePalette.palette.mode === "dark"
              ? { color: themePalette.palette[ownerState.color]?.light }
              : { color: themePalette.palette[ownerState.color]?.main }),
          }),
        },
      },
      MuiTextField: {
        variants: [
          {
            props: { variant: "standard" },
            style: {
              "& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "1px solid",
              },
            },
          },
        ],
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: "4px",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            backgroundColor:
              themePalette.palette.mode === "dark"
                ? "#121212"
                : themePalette.palette.table.main,
            borderRadius: "6px",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            fontWeight: "bold",
          },
          body: {
            fontSize: 12,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.down.light
                : themePalette.palette.down.main,
          },
          track: {
            backgroundColor:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.down.light
                : themePalette.palette.down.main,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.inputField.light
                : arcGreyLight,
          },
        },
        defaultProps: {
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: {
                  xs: MOBILE_ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                  sm: ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                },
              },
            },
          },
        },
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor:
                  themePalette.palette.mode === "dark"
                    ? arcGreyLight
                    : arcGreyDark,
              },
            },
          },
          {
            props: { variant: "standard" },
            style: {
              "& .MuiInputBase-input:focus": {
                backgroundColor: "transparent",
              },
            },
          },
        ],
      },
      MuiAutocomplete: {
        styleOverrides: {
          popper: {
            zIndex: 1300,
          },
        },
      },

      MuiDatePicker: {
        styleOverrides: {
          root: {
            backgroundColor:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.inputField.light
                : themePalette.palette.inputField.main,
          },
        },
      },
      MuiDateTimePicker: {
        styleOverrides: {
          root: {
            backgroundColor:
              themePalette.palette.mode === "dark"
                ? themePalette.palette.inputField.light
                : themePalette.palette.inputField.main,
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState["aria-label"] === "component-header" && {
              backgroundColor:
                themePalette.palette.mode === "dark"
                  ? themePalette.palette.primary.light
                  : themePalette.palette.primary.main,
              color:
                themePalette.palette.mode === "dark"
                  ? themePalette.palette.componentHeaderText.light
                  : themePalette.palette.componentHeaderText.main,
            }),
          }),
        },
      },
      MuIcon: {
        variants: [
          {
            props: { fontSize: "medium-large" },
            style: {
              fontSize: "30px",
            },
          },
        ],
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(themePalette.palette.mode === "dark"
              ? { color: themePalette.palette[ownerState.color]?.light }
              : { color: themePalette.palette[ownerState.color]?.main }),
          }),
        },
        variants: [
          {
            props: { fontSize: "medium-large" },
            style: {
              fontSize: "30px",
            },
          },
        ],
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          TransitionComponent: Zoom,
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#6b6b6b #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "0.6em",
              height: "0.6em",
              display: "hidden",
              backgroundColor:
                themePalette.palette.mode === "dark"
                  ? arcGreyDark
                  : themePalette.palette.background.default,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            },
          },
        },
      },
    },
  });
};

export default themeDefault;
