import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { Switch , Route, BrowserRouter} from "react-router-dom";
import React from "react";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils.js";


class App extends React.Component{
    constructor() {
        super();

        this.state = {
            currentUser : null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
       this.unsubscribeFromAuth =
           auth.onAuthStateChanged(async authUser => {
               if (authUser) {
                   const userRef = await createUserProfileDocument(authUser);

                   userRef.onSnapshot( snapShot => {
                           this.setState({
                                currentUser : {
                                    id: snapShot.id,
                                    ...snapShot.data()
                                }
                               }
                           );
                   }

                   );
               }
               else {
                   this.setState({ currentUser: authUser})
               }
           })

    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    render() {
          return (
              <BrowserRouter>
                  <Header currentUser={this.state.currentUser}/>
                  <Switch>
                      <Route exact path="/" component={HomePage}/>
                      <Route path="/shop" component={Shop}/>
                      <Route path="/sign-in" component={SignInSignUp}/>
                  </Switch>
              </BrowserRouter>
          );
      }
}

export default App;
