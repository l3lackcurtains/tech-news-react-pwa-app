import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
const styles = {
  card: {
    marginBottom: 8
  }
}
class Article extends Component {

	render() {
      const {n} = this.props
      const author = "By "+n.author
      const titleStyle = {
        fontSize: 18
      }
      return (
        <Card style={styles.card}>
          <CardMedia
          overlay={<CardTitle title={n.title} subtitle={author} titleStyle={titleStyle}/>}
          >
            <img src={n.urlToImage} />
          </CardMedia>
          
          <CardActions>
            <FlatButton label="Continue Reading.." href={n.url}/>
          </CardActions>
        </Card>
    );
  }
}
export default Article