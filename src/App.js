import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/github"
            exact
            component={() => {
              window.location.href = "https://github.com/Songhee95";
              return null;
            }}
          />
          <Route
            path="/linkedIn"
            exact
            component={() => {
              window.location.href =
                "https://www.linkedin.com/in/songhee-y-821442167/";
              return null;
            }}
          />
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
