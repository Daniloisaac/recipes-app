import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import AppProvider from './context/AppProvider';

function App() {
  return (
<<<<<<< HEAD
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="done-recipes" component={ DoneRecipes } />
        <Route exact path="favorite-recipes" component={ FavoriteRecipes } />
        <Footer />
      </Switch>
    </AppProvider>
=======
    <div className="meals">
      <span className="logo">TRYBE 2.0</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
>>>>>>> origin
  );
}

export default App;
