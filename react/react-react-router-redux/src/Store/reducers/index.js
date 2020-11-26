import { combineReducers } from 'redux';
import log from './logReducer/logReducer';
import { connectRouter } from 'connected-react-router';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    log,
  });
