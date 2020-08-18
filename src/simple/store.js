import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {quakesReducer} from './reducer'


export const store = createStore(quakesReducer,composeWithDevTools(applyMiddleware()))