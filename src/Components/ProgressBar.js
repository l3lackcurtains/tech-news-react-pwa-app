import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: -10
  },
  progress: {
    marginTop: 180,
    color: "#3B3B98"
  },
  linearColorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  linearBarColorPrimary: {
    backgroundColor: "#3B3B98"
  }
});

function ProgressBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{
          colorPrimary: classes.linearColorPrimary,
          barColorPrimary: classes.linearBarColorPrimary
        }}
      />
      <CircularProgress className={classes.progress} size={40} thickness={5} />
    </div>
  );
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProgressBar);
