import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'
import {handleLoadQuakes} from './sagas'

import {quakesReducer} from './reducer'

const  sagaMiddleware = createSagaMiddleware()

// выяснить варианты последовательнгосьт вызовов
const store = createStore(quakesReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(handleLoadQuakes)
sagaMiddleware.run(rootSaga)

export default store
