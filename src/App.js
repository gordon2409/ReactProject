import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/shop" component={ShopPage} />
    <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
    </div>

  );
}

export default App;

