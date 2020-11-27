import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { Switch , Route, BrowserRouter, Redirect} from "react-router-dom";
import React from "react";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount() {
       const { setCurrentUser } = this.props;
       this.unsubscribeFromAuth =
           auth.onAuthStateChanged(async authUser => {
               if (authUser) {
                   const userRef = await createUserProfileDocument(authUser);

                   userRef.onSnapshot( snapShot => {
                           setCurrentUser({
                                    id: snapShot.id,
                                    ...snapShot.data()

                               }
                           );
                   }

                   );
               }
               else {
                   setCurrentUser( authUser)
               }
           })

    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    render() {
          return (
              <BrowserRouter>
                  <Header />
                  <Switch>
                      <Route exact path="/" component={HomePage}/>
                      <Route path="/shop" component={Shop}/>
                      <Route path="/sign-in" render={ () => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)}/>
                  </Switch>
              </BrowserRouter>
          );
      }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
