import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Dashboard from "./components/dashboard/Dashboard";

import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" exact component={Dashboard} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
