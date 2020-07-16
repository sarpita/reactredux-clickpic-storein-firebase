import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import {camera} from './camera.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  registration,
  camera
});

export default rootReducer;