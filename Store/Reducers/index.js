import { combineReducers } from 'redux';
import pseudoValide from './pseudoValideReducer';
import dataAccount from './dataAccountReducer';
import variableForChart from './variableForCharReducer';
import gamesNumber from './gamesNumberReducer';
import url from './urlReducer';

export default combineReducers({
  pseudoValide,
  dataAccount,
  variableForChart,
  gamesNumber,
  url,
});
