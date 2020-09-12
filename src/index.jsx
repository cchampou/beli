import React from 'react';
import reactDom from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import { Router } from '@reach/router';
import Home from './pages/home';
import About from './pages/about';
import theme from '../config/theme.json';
import Header from './components/header';
import Footer from './components/footer';

export const GlobalStyles = css`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Header />
    <Router>
      <Home path="/" />

    </Router>
    <Footer />
  </ThemeProvider>
);

reactDom.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => {
    console.log('Reloading');
  });
}
