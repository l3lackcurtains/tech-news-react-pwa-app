import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { Link } from "react-router-dom";

import config from "../Utils/config";
import logo from "../assets/images/long-light-logo.png";

const styles = {
  drawer: {
    height: "100%",
    position: "relative"
  },
  list: {
    width: 250,
    overflowX: "hidden"
  },
  fullList: {
    width: "auto"
  },
  source: {
    margin: 8
  },
  menuItem: {
    textDecoration: "none"
  },
  menuTitle: {
    paddingLeft: 28,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 600,
    fontSize: 24,
    color: "#fff",
    textTransform: "uppercase",
    background: "#3B3B98"
  },
  menuText: {
    color: "#555",
    margin: 0,
    fontWeight: 400
  },
  activeMenuText: {
    color: "#3B3B98",
    fontWeight: 500
  }
};

class Navbar extends React.Component {
  state = {
    left: false,
    sources: []
  };

  componentDidMount = async () => {
    const newsSources = await axios.get(
      `https://newsapi.org/v2/sources?language=en&country=us&category=technology&apiKey=${
        config.newsApiKey
      }`
    );

    if (newsSources.data.status === "ok") {
      this.setState({
        sources: newsSources.data.sources
      });
    }
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const menuPath = window.location.pathname;
    const sideList = (
      <div className={classes.list}>
        <div className={classes.menuTitle}>Tech News</div>
        <Divider />
        <List>
          <Link className={classes.menuItem} to="/">
            <ListItem className={classes.source} button>
              <p
                className={`
                      ${classes.menuText}
                      ${menuPath === "/" ? classes.activeMenuText : ""}`}
              >
                Top Headlines
              </p>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {this.state.sources &&
            this.state.sources.map((source, index) => (
              <Link
                className={classes.menuItem}
                to={`/news/${source.id}`}
                key={source.id}
              >
                <ListItem className={classes.source} button>
                  <p
                    className={`
                      ${classes.menuText}
                      ${
                        menuPath === "/news/" + source.id
                          ? classes.activeMenuText
                          : ""
                      }`}
                  >
                    {source.name}
                  </p>
                </ListItem>
              </Link>
            ))}
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={this.toggleDrawer("left", true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} className="App-logo" alt="logo" />
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          className={classes.drawer}
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
