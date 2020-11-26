import * as actionTypes from './actionTypes';
import * as logFns from './logFunctions';

const initialState = {
  logger: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.UPDATE_LOGGER:
      return logFns.updateLogger(state, payload);
    case actionTypes.GO_TEST_PAGE:
      return logFns.goTestPage(state);
    default:
      return state;
  }
}
