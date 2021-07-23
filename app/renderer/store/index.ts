import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import globalModel from './globalModel';

const reduxModel = new RcReduxModel([globalModel]);
const reducerList = combineReducers(reduxModel.reducers);
export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
