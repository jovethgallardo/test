//React
import React from 'react';

import PropTypes from 'prop-types';

//Material Design
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AppsIcon from 'material-ui-icons/Apps';
import Button from 'material-ui/Button';


import Styles from './styles';

const TopBar =(props) => {

  const {classes, open, drawerOpen} = props;

  return (

        <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
          <Toolbar style={{borderLeft: '1px solid #393939'
}} disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={drawerOpen.bind(this)}
              className={classNames(classes.appsIcon, open && classes.hide)}
            >
              <AppsIcon />
            </IconButton>

            <Typography variant="title" color="inherit" className={classes.flex}>
              Users
            </Typography>

            <Typography style={{marginRight: '25px'}} color="inherit">
              Login
            </Typography>

          </Toolbar>
        </AppBar>
  );
}


export default withStyles(Styles, { withTheme: true })(TopBar);