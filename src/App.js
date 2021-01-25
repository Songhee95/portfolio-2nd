import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
