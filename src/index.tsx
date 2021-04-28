import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainChart from './pages/MainChart';
import MainDashBoard from './pages/MainDashBoard';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import reportWebVitals from './reportWebVitals';
import store  from './store';
import theme from './style/theme';

document.title = "RUNNER";

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>        
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Dashboard" component={MainDashBoard} />
          <Route path="/MainChart" component={MainChart} />
          <Route path="/MyPage" component={MyPage} />
        </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
