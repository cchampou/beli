import React from 'react';
import reactDom from 'react-dom';
import Home from './pages/home';

reactDom.render(<Home />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => {
    console.log('Reloading');
  });
}
