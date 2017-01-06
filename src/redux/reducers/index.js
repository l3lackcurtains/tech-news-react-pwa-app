import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import newsReducer from './news'
import srcReducer from './sources'

const reducers = {news: newsReducer, src: srcReducer}
const rootReducer = combineReducers({...reducers, routing: routerReducer})

export default rootReducer