'use strict';

import React from 'react';
import App from './app';

React.initializeTouchEvents(true);

React.render(
  <App />,
  document.getElementById('react-content')
);
