import NavbarHead from "./components/NavbarHead";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/index.scss";
import Leagues from "./components/Leagues";
import Home from "./components/Home";
import League from "./components/League";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarHead />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/leagues" component={Leagues} />
          <Route exact path="/league" component={League} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
