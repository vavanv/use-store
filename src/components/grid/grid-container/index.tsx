import * as React from 'react';
import { Grid } from '@mui/material';

import { WithStyles, withStyles } from '@mui/styles';

import { styles } from './styles';

const GridContainerComponent = (props: any & WithStyles<typeof styles>) => {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={`${classes.grid}`}>
      {children}
    </Grid>
  );
};

export const GridContainer = withStyles(styles)(GridContainerComponent);
