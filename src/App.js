import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { Switch , Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
       <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/sign-in" component={SignInSignUp}/>
          </Switch>
       </BrowserRouter>
  );
}

export default App;
