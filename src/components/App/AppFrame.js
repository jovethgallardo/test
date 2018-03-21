//REACT
import React, { Component } from 'react';

//MATERIAL DESIGN STYLING
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';


import Styles from './styles';


//COMPONENTS
import TopBar from './TopBar';
import Menu from './Menu';
import Drawer from './Drawer';
import Content from './Content';

class AppFrame extends Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
        <TopBar open={this.state.open} drawerOpen={this.handleDrawerOpen.bind(this)}/>
        <Drawer open={this.state.open} drawerClose={this.handleDrawerClose.bind(this)}/>
        <Menu open={this.state.open}/>
        <Content open={this.state.open}/>
      </div>
    );

  }
}

export default  withStyles(Styles, {withTheme: true})(AppFrame);