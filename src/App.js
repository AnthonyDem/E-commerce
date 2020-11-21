import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { Switch , Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/Shop" component={Shop}/>
          </Switch>
       </BrowserRouter>
  );
}

export default App;
