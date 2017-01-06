import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Article extends Component {

	render() {
      const {n} = this.props
      const author = "By "+n.author
      const titleStyle = {
        fontSize: 18
      }
      return (
        <Card>
          <CardMedia
          overlay={<CardTitle title={n.title} subtitle={author} titleStyle={titleStyle}/>}
          >
            <img src={n.urlToImage} />
          </CardMedia>
          
          <CardActions>
            <FlatButton label="Read All" href={n.url}/>
          </CardActions>
        </Card>
    );
  }
}
export default Article