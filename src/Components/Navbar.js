import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import { Link } from "react-router-dom";

import config from "../Utils/config";
import logo from "../assets/images/long-light-logo.png";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  source: {
    margin: 8
  },
  sourceLink: {
    textDecoration: "none"
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

    const sideList = (
      <div className={classes.list}>
        <List>
          {this.state.sources &&
            this.state.sources.map((source, index) => (
              <Link
                className={classes.sourceLink}
                to={`/news/${source.id}`}
                key={source.id}
              >
                <ListItem className={classes.source} button>
                  <ListItemText primary={source.name} />
                </ListItem>
              </Link>
            ))}
        </List>
      </div>
    );

    console.log(this.state);

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
