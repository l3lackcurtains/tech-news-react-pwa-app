import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {browserHistory} from 'react-router'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import {Card, CardMedia} from 'material-ui/Card'
import './header.css';
var himg = require('../../assets/images/desk.jpg')
class Header extends Component {
	constructor(props){
		super(props)
		this.state = {open: false, home: false}
		
	}
	componentWillMount() {
		if(window.location.href == 'http://localhost:8080/'){
			this.setState({home: true})
		}
	}
	handleToggle = () => {
		if(this.state.home){
			this.setState({open: !this.state.open})
		}else{
			browserHistory.goBack()
		} 
	}
	handleClose = () => this.setState({open: false})
	handleTitleTap = () => 	browserHistory.push({pathname: "/"})

	render() {
		const appbarStyle = {
			backgroundColor: "#283593",
			color: "#fff"
		}
		const {title} = this.props       
        return (
          <div className="header">
            <AppBar
            	title={title}
            	style={appbarStyle}
            	iconElementLeft={this.state.home ? <IconButton><NavigationMenu /></IconButton>:<IconButton><NavigationArrowBack /></IconButton>}
            	onLeftIconButtonTouchTap={this.handleToggle}
            	onTitleTouchTap={this.handleTitleTap}
            />
            <Drawer
            	docked={false}
            	width={200}
            	open={this.state.open}
            	onRequestChange={ (open) => this.setState({open})}>
            	<Card>
		          <CardMedia >
		            <img src={himg} />
		          </CardMedia>
		        </Card>
            	<MenuItem>About</MenuItem>
            	<MenuItem>Contact</MenuItem>
            </Drawer>
          </div>
        );
  }
}
export default Header