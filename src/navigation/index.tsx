import * as React from "react";
import { Drawer } from "@mui/material";
import { WithStyles, withStyles } from "@mui/styles";

import { NavBarMainMenuItems } from "./menu-items";
import { Header } from "./header";

import { styles } from "./styles";

interface Props extends WithStyles<typeof styles> {
  headerColor: string;
}

const NavBarComponent = (props: Props) => {
  const { headerColor } = props;

  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  return (
    <>
      <Header
        color={headerColor}
        handleToggle={() => setSideMenuOpen(!sideMenuOpen)}
      />
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#19212b",
          },
        }}
        open={sideMenuOpen}
        onClose={() => setSideMenuOpen(!sideMenuOpen)}
      >
        <NavBarMainMenuItems
          handleToggle={() => setSideMenuOpen(!sideMenuOpen)}
        />
      </Drawer>
    </>
  );
};

export const NavBar = React.memo(withStyles(styles)(NavBarComponent));
