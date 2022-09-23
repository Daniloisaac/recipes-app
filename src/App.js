import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </AppProvider>
  );
}

export default App;
