import { combineReducers } from 'redux';
import QrCodeReducer from './qrcode_reducer';

const rootReducer = combineReducers({
  qrcode:QrCodeReducer,
});

export default rootReducer;
