import React from "react";
import About from "./components/About";
import Header from "./components/Header";
// import Fullpage from "./components/Fullpage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        {/* <Route exact path="/Fullpage" component={Fullpage} /> */}
        <Route exact path="/Header" component={Header} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Skills" component={Skills} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
