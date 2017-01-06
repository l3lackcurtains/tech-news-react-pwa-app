import React, { Component } from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import Articles from '../articles'
import fetchSrc from '../../redux/actions/sources'
import store from '../../redux'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridTile: {
  	width: 100,
  	height: 100,
  	margin: 8
  }
};

@connect( state => ({src: state.src}))
class home extends Component {
	// fetch news sources
   componentWillMount() {
        store.dispatch(fetchSrc() )
    }
   handleNavigate( id){
	   	const path = `/news`
	   	browserHistory.push({pathname: path, query: {srcId: id} })

    }
  render() {
  	const {src} = this.props
    return (
      <div>
        <Header />
        <div style={styles.root}>
        	<Subheader>Top News From: </Subheader>
    		<GridList
  	      style={styles.gridList}
  	      cols={2.2}
  	    >
  	      {src.data.map((s, i) => (
  	        <GridTile key={i} style={styles.gridTile} >
  	          <img src={s.urlsToLogos.medium} onTouchTap={() => this.handleNavigate(s.id)}/>
  	        </GridTile>
  	      ))}
  	    </GridList>
        </div>
        <Articles source="techcrunch"/>
      </div>
    );
  }
}

export default home;
