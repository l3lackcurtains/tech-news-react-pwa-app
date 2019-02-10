import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from "react-flexbox-grid";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ProgressBar from "../Components/ProgressBar";
import NewsBox from "../Components/NewsBox";
import config from "../Utils/config";

const styles = {
  newsHeader: {
    margin: 8,
    textAlign: "left"
  },
  expansionPanel: {
    margin: 18
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    textTransform: "uppercase"
  },
  subtitle: {
    paddingTop: 16,
    width: "100%"
  }
};
class SourceNews extends Component {
  state = {
    articles: [],
    sources: []
  };

  componentDidMount() {
    const source = this.props.match.params.source;
    this.fetchNews(source);
    this.fetchSources();
  }

  componentDidUpdate(prevProps) {
    const source = this.props.match.params.source;
    const prevSource = prevProps.match.params.source;
    if (source !== prevSource) {
      this.fetchNews(source);
    }
  }

  fetchNews = async source => {
    this.setState({
      articles: []
    });
    const newsArticles = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${
        config.newsApiKey
      }`
    );

    if (newsArticles.data.status === "ok") {
      this.setState({
        articles: newsArticles.data.articles
      });
    }
  };

  fetchSources = async () => {
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

  render() {
    const { articles, sources } = this.state;
    const { classes } = this.props;
    const pathSource = this.props.match.params.source;

    if (articles.length === 0) {
      return (
        <React.Fragment>
          <ProgressBar />
        </React.Fragment>
      );
    }
    return (
      <div>
        {sources.map(source =>
          source.id === pathSource ? (
            <div className={classes.newsHeader}>
              <ExpansionPanel className="expansionPanel" defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.title} color="primary">
                    {source.name}
                  </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <Typography className={classes.subtitle} color="textPrimary">
                    {source.description}
                  </Typography>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button
                    className="visitSource"
                    variant="outlined"
                    color="primary"
                    href={source.url}
                  >
                    Visit Website
                    <ArrowForwardIcon />
                  </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>
            </div>
          ) : null
        )}
        <Grid fluid>
          <Row>
            {articles.map(article => (
              <Col xs={12} md={6} lg={4}>
                <NewsBox key={article.source.name} article={article} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(SourceNews);
