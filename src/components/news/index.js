import React, { Component } from 'react';
import Articles from '../articles'
import Header from '../header'
const styles = {
  news : {
    marginTop: 60
  }
}
class news extends Component {
  render() {
  	const srcId = this.props.location.query.id
    return (
    	<div>
    		<Header title={this.props.location.query.name}/>
	      <div style={styles.news}>
	        <Articles source={srcId} />
	      </div>
	    </div>
    );
  }
}

export default news