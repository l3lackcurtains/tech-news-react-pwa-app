import React, { Component } from 'react'
import {connect} from 'react-redux'
import fetchNews from '../../redux/actions/news'
import store from '../../redux'
import Article from './article'

@connect( state => ({news: state.news}))
class Articles extends Component {
    componentWillMount() {
        store.dispatch(fetchNews(this.props.source) )
    }
	render() {
        const {news} = this.props
        return (
          <div>
            {news.data.map( (n,i) => {
            return (
              <Article key={i} n={n} />
            )
          })}
          </div>
    );
  }
}
export default Articles