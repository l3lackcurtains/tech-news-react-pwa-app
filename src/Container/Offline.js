import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LoopIcon from "@material-ui/icons/Loop";

import noWifi from "../assets/images/no-wifi.png";

const styles = {
  noWifi: {
    width: 150,
    margin: 48
  },
  errMessage: {
    margin: 16
  }
};
class Home extends Component {
  state = {
    //
  };

  render() {
    const { classes } = this.props;
    /* eslint-disable */
    return (
      <div>
        <img className={classes.noWifi} src={noWifi} />
        <p className={classes.errMessage}>
          It Looks like you are offline. You are viewing this page because of
          the magic of progressive web app.
        </p>
        <p className={classes.errMessage}>
          You can reload the page you requested when you are online.
        </p>
        <Button
          color="secondary"
          variant="outlined"
          className={classes.button}
          onClick={() => this.props.history.goBack()}
        >
          <LoopIcon />
          Reload
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
