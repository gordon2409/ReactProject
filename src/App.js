import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import CheckoutPage from './components/pages/checkout/checkout.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'


class App extends React.Component  {
 
  unsuscribeFromAuth = null;

  componentDidMount() {



    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
         setCurrentUser(
          {
            id: snapShot.id,
            ...snapShot.data()
          }) 
         })
       }
     setCurrentUser(userAuth)
     
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path="/signin" render={() => 
        this.props.currentUser ?
            (<Redirect to='/' />)
            :
            (<SignInAndSignUpPage />)
        } />
        
      </Switch>
      </div>
  
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

