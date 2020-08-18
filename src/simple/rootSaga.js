import { put, takeEvery, call, all, select } from 'redux-saga/effects'

import {watchRefreshQuakes} from './sagas'

export default function* rootSaga(){

	yield all([watchRefreshQuakes(),]) 

}