import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

const styles = theme => ({
  card: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: "#c5c5c5"
  },
  media: {
    height: 250,
    backgroundColor: "#666"
  },
  header: {
    textAlign: "left"
  },
  actions: {
    display: "flex"
  },
  readmore: {
    marginLeft: "auto"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, article } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.header}>
          <Typography className={classes.title} color="textPrimary">
            {article.title}
          </Typography>
          <Typography className={classes.subtitle} color="textPrimary">
            {article.source.name} • {article.author} •{" "}
            <Moment fromNow>{article.publishedAt}</Moment>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title={article.title}
        />

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <Button
            href={article.url}
            aria-label="Continue Reading"
            className={classes.readmore}
          >
            Continue Reading
          </Button>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
