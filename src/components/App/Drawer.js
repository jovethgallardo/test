import React from 'react';


import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';


import Styles from './styles';


const AppDrawer = (props) => {

  const { theme, classes, open, drawerClose } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
      style={{zIndex:1}}
    >
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={drawerClose.bind(this)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>kjkjkjk</List>
        <Divider />
        <List className={classes.list}>kjkjk</List>
      </div>
    </Drawer>
  );
}

export default withStyles(Styles, {withTheme: true})(AppDrawer);

