//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//React Hot Loader
import { AppContainer } from 'react-hot-loader';

//React Router
import { BrowserRouter} from 'react-router-dom';

//CSS - Customized Material UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import defaultTheme from './themes/default';
const theme = createMuiTheme(defaultTheme);

//App Component
import AppFrame from './components/App/AppFrame';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Component />
        </BrowserRouter>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(AppFrame);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept( () => {
    render(AppFrame);
  })
};
