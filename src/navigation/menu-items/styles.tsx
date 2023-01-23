import { Theme, createTheme } from "@mui/material/styles";
import { createStyles } from "@mui/styles";
import {
  headerBackground,
  dividerColor,
} from "../../assets/jss/portal-material/portal-material";

export const styles = ({ palette }: Theme) => {
  return createStyles({
    rootDiv: {
      height: "100%",
    },
    list: {
      padding: 0,
      "& svg": {
        fontSize: 20,
      },
    },
    categoryHeader: {
      background: headerBackground,
    },
    categoryHeaderText: {
      fontSize: 14,
      fontWeight: 500,
      color: palette.common.white,
    },
    item: {
      "&:hover": {
        background: dividerColor,
      },
    },
    itemIcon: {
      margin: 0,
    },
  });
};

export const getMuiTheme = () =>
  createTheme({
    palette: {
      primary: { main: "#262f3d" },
      background: { paper: "#262f3d" },
    },
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#262f3d",
          },
        },
      },
    },
  });
