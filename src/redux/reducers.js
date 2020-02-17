import { combineReducers } from 'redux';

import generalReducer from './generalReducer';
import dashboardReducer from '../components/dashboard/dashboardReducer';

export default combineReducers({
  generalData: generalReducer,
  dashboardData: dashboardReducer
});
