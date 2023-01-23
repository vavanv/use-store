import * as React from 'react';
import { Grid } from '@mui/material';

import { WithStyles, withStyles } from '@mui/styles';

import { styles } from './styles';

const GridItemComponent = (props: any & WithStyles<typeof styles>) => {
  const { classes, children, className = '', ...rest } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export const GridItem = React.memo(withStyles(styles)(GridItemComponent));
