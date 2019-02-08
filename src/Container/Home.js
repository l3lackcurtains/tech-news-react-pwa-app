import React, { Component } from "react";
import axios from "axios";
import NewsBox from "../Components/NewsBox";

import config from "../Utils/config";
class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    const newsArticles = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${
        config.newsApiKey
      }`
    );

    if (newsArticles.data.status === "ok") {
      this.setState({
        articles: newsArticles.data.articles
      });
    }
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => (
          <NewsBox key={article.source.name} article={article} />
        ))}
      </div>
    );
  }
}

export default Home;
