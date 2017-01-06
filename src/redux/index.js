import {applyMiddleware, createStore, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let middleware = applyMiddleware(thunk)


const store = createStore(rootReducer, middleware)

export default store