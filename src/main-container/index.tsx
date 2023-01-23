import * as React from "react";
import { WithStyles, withStyles } from "@mui/styles";
import { Container } from "@mui/material";

import { NavBar } from "../navigation";
import { styles } from "./styles";

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

const MainContainerComponent = (props: Props) => {
  return (
    <>
      <NavBar headerColor={"primary"} />
      <div className={props.classes.container}>
        <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
          {props.children}
        </Container>
      </div>
    </>
  );
};

export const MainContainer = React.memo(
  withStyles(styles)(MainContainerComponent)
);
