import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Footer />
      </Switch>
    </AppProvider>
  );
}

export default App;
