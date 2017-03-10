import React from 'react';

import Header from './header/Header';
import Cards from './cards/Cards';
import './styles.scss';

require('offline-plugin/runtime').install(); // eslint-disable-line

const App = () => (
  <div>
    <Header />
    <Cards />
  </div>
);

export default App;
