import React, { Suspense } from 'react';
import reactDom from 'react-dom';
import './utils/i18n';
import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import { Router } from '@reach/router';
import { shop } from '../config/routes.json';

import theme from '../config/theme.json';
import Header from './components/header';
import MobileHeader from './components/mobileHeader';
import Footer from './components/footer';
import SocialBar from './components/socialBar';
import NotFound from './pages/notFound';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Youtube = React.lazy(() => import('./pages/youtube'));
const Contact = React.lazy(() => import('./pages/contact'));
const Shop = React.lazy(() => import('./pages/shop'));
const ShopEntry = React.lazy(() => import('./pages/shopEntry'));

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = css`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin: 0;
    line-height: 2rem;
    overflow-x: hidden;
    width: 100vw;
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
    <MobileHeader />
    <Suspense fallback={null}>
      <Router>
        <Home path="/" />
        <About path="about" />
        <Youtube path="youtube" />
        <Contact path="contact" />
        <Shop path={shop} />
        <ShopEntry path={`${shop}/:slug`} />
        <NotFound default />
      </Router>
    </Suspense>
    <SocialBar />
    <Footer />
  </ThemeProvider>
);

reactDom.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => null);
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      // eslint-disable-next-line no-console
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      // eslint-disable-next-line no-console
      console.log('SW registration failed: ', registrationError);
    });
  });
}
