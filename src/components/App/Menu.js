import React, { Component } from 'react';

//Material Design
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import { MenuItem, MenuList } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import PersonIcon from 'material-ui-icons/Person';
import AddPersonIcon from 'material-ui-icons/PersonAdd';
import GroupIcon from 'material-ui-icons/Group';
import HomeIcon from 'material-ui-icons/Home';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import ChartIcon from 'material-ui-icons/InsertChart';
import CardGiftcard from 'material-ui-icons/CardGiftcard';
import CardMembership from 'material-ui-icons/CardMembership';
import EmployeeIcon from 'material-ui-icons/AssignmentInd';



import List from 'material-ui/List';


import Styles from './styles';

const Menu = (props) => {

  const { classes, open } = props;

  return (
    <div className={classNames(classes.appMenu, open && classes.menuShift)}>
      <div  className={classes.menuToolbar} >
        <MenuList>

          <MenuItem className={classes.menuItem}>
            <HomeIcon />
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <ShoppingCartIcon />
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <ChartIcon />
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <PersonIcon />
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <CardGiftcard />
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <CardMembership />
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <EmployeeIcon />
          </MenuItem>

        </MenuList>
      </div>
    </div>
  );
}

export default withStyles(Styles, { withTheme: true })(Menu);