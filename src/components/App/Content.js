import React from 'react';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Styles from './styles';

const Content = (props) => {
  const { classes } = props;

  return (
    <div className={classes.content}>
      Hello Joveth 
    </div>   
  );
}

export default withStyles(Styles, { withTheme: true })(Content);