import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" exact component={Home} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
