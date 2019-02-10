import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Container/Home";
import SourceNews from "./Container/SourceNews";
import Offline from "./Container/Offline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3B3B98",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <main>
              <header className="App-header">
                <Navbar />
              </header>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/news/:source" component={SourceNews} />
                <Route path="/offline" component={Offline} />
              </Switch>
            </main>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
