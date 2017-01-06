import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './redux'
import main from './components'
import login from './components/login'
import home from './components/home'
import news from './components/news'
import fetchNews from './redux/actions/news'
import './index.css';

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)
const root = document.getElementById('root');


render(
	<MuiThemeProvider>
		<Provider store={store}>
			<Router history={history}>
			  <Route path="/" component={main}>
			  	<IndexRoute component={home}></IndexRoute>
			  	<Route path="/login" component={login}></Route>
			  	<Route path="/news" component={news}></Route>
			  </Route>     	
			</Router>
		</Provider>
	</MuiThemeProvider>
  ,
  root
);
