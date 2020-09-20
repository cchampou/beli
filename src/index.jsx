import React, { Suspense } from 'react';
import reactDom from 'react-dom';
import './utils/i18n';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import { Router } from '@reach/router';

import theme from '../config/theme.json';
import Header from './components/header';
import Footer from './components/footer';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Youtube = React.lazy(() => import('./pages/youtube'));
const Contact = React.lazy(() => import('./pages/contact'));

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = css`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin: 0;
    line-height: 2rem;
  }
  strong {
    font-weight: 800;  
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
    <Suspense fallback={null}>
      <Router>
        <Home path="/" />
        <About path="about" />
        <Youtube path="youtube" />
        <Contact path="contact" />
      </Router>
    </Suspense>
    <Footer />
  </ThemeProvider>
);

reactDom.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => null);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
