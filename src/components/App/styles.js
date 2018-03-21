//TOP BAR STYLING
const drawerWidth = 450;
const menuWith = 600;

const styles = theme => ({


  //APP FRAME
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  flex: {
    flex: 1
  },

  //APP BAR
  appBar: {
    width:'100%',
    position: 'absolute',
    background: '#333',
    zIndex: 999999,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    borderBottom: '1px solid #393939',
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  //APP MENU
  appMenu: {
    position:'relative',
    height:'100%',
    zIndex:2
  },

  menuToolbar: {
    boxShadow: '-3px 0 2px #2a2a2a',
    marginLeft:'-60px',
    background: '#333', 
    height:'100%', 
    width: menuWith, 
    position:'absolute',
    borderLeft: '1px solid #393939',
    paddingTop: '90px'
  },

  menuItem: {
    color: '#eaeaea',
    paddingTop: '35px',
    paddingBottom: '35px',
  },

  menuShift:{
    marginLeft: 60,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  appsIcon: {
    marginLeft: 6,
    marginRight: 25,
  },

  hide: {
    display: 'none',
  },

  //APP DRAWER
  drawerPaper: {
    background: '#333',
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    zIndex:1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex:-9999,
  },

  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },

  content: {
    width: '100%',
    flexGrow: 1,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
    boxShadow: '-3px 0 2px #2a2a2a',
    position:'relative',
    zIndex: 3,
    background: '#ffffff'
  },
  
})

export default styles;