import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/">
        <Home />
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
      </Router>
    </>
  );
}

export default App;
