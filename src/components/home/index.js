import React, { Component } from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import {Card} from 'material-ui/Card'
import Header from '../header'
import Articles from '../articles'
import fetchSrc from '../../redux/actions/sources'
import store from '../../redux'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: 160,
    marginTop: 60
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridTile: {
  	width: 80,
  	height: 80,
  	margin: 8
  },
  card:{
    width: 80,
    height: 80,
    margin: 8,
    overflow: "hidden"
  },
  img : {
    width: 80,
    height: "auto"
  }
};

@connect( state => ({src: state.src}))
class home extends Component {
	// fetch news sources
   componentWillMount() {
        store.dispatch(fetchSrc() )
    }
   handleNavigate( id, name){
	   	const path = `/news`
	   	browserHistory.push({pathname: path, query: {id: id, name: name} })

    }
  render() {
  	const {src} = this.props
    return (
      <div>
        <Header title="Tech News"/>
        <div style={styles.root}>
        	<Subheader>Top News From: </Subheader>
    		<GridList
  	      style={styles.gridList}
  	      cols={2.2}
  	    >
  	      {src.data.map((s, i) => (
            <Card style={styles.card} key={i} onTouchTap={() => this.handleNavigate(s.id, s.name)}>
    	        <GridTile style={styles.gridTile} >
    	          <img src={s.urlsToLogos.medium} style={styles.img}/>
    	        </GridTile>
            </Card>
  	      ))}
  	    </GridList>
        </div>
        <Articles source="techcrunch"/>
      </div>
    );
  }
}

export default home;
