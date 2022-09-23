import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
// import Footer from './components/Footer';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="done-recipes" component={ DoneRecipes } />
        <Route exact path="favorite-recipes" component={ FavoriteRecipes } />
        <Footer /> */}
      </Switch>
    </AppProvider>
  );
}

export default App;
