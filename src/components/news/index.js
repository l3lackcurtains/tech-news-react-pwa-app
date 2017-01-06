import React, { Component } from 'react';
import Articles from '../articles'

class news extends Component {
  render() {
  	const srcId = this.props.location.query.srcId
    return (
    	<div>
    		<Header />
	      <div className="news">
	        <Articles source={srcId} />
	      </div>
	    </div>
    );
  }
}

export default news