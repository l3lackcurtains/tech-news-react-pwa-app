import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Container/Home";
import SourceNews from "./Container/SourceNews";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <main>
            <header className="App-header">
              <Navbar />
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news/:source" component={SourceNews} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
