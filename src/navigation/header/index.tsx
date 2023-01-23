import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Switch, FormControlLabel, FormControl } from "@mui/material";
import { GridItem } from "../../components";
import { uiStore, userStore } from "../../store/stores";

interface Props {
  handleToggle: () => void;
  color: any;
}

function HeaderComponent(props: Props) {
  const { handleToggle, color } = props;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    uiStore.setState({ isBusy: event.target.checked });
  };
  return (
    <AppBar color={color}>
      <Toolbar>
        <IconButton color="inherit" onClick={handleToggle} size="medium">
          <MenuIcon />
        </IconButton>
        <GridItem>
          <Typography variant="h6" color="inherit">
            Test v2
          </Typography>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={uiStore.useStore((s) => s.isBusy)}
                  name="status"
                  size="small"
                  onChange={onChange}
                />
              }
              label="Status"
            />
          </FormControl>
        </GridItem>
        <GridItem>{userStore.useStore((s) => s.firstName)}</GridItem>
        <GridItem>{userStore.useStore((s) => s.lastName)}</GridItem>
      </Toolbar>
    </AppBar>
  );
}

export const Header = React.memo(HeaderComponent);
