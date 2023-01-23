import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { GridItem } from "../../components";

interface Props {
  handleToggle: () => void;
  color: any;
}

function HeaderComponent(props: Props) {
  const { handleToggle, color } = props;

  return (
    <AppBar color={color}>
      <Toolbar>
        <IconButton color="inherit" onClick={handleToggle} size="medium">
          <MenuIcon />
        </IconButton>
        <GridItem>
          <Typography variant="h6" color="inherit">
            Games Manager v2
          </Typography>
        </GridItem>
        <GridItem>
          {/* <Typography variant="overline">{`${me.userAccessType} ${me.email}`}</Typography> */}
        </GridItem>
      </Toolbar>
    </AppBar>
  );
}

export const Header = React.memo(HeaderComponent);
