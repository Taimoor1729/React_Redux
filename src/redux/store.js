import {applyMiddleware , legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootRedcuer from './rootReducer'
import thunk from 'redux-thunk';


const store = createStore(rootRedcuer,composeWithDevTools(applyMiddleware(logger, thunk)))
export default store