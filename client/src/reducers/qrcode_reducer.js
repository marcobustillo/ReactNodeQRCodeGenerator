import { QRCodeConstants } from '../constants';

const defaultState = {
  isRequesting : false
}


export default function (state = defaultState ,action){
  switch (action.type) {
    case QRCodeConstants.QRCODE_REQUEST:
      return { isRequesting:true };
    case QRCodeConstants.QRCODE_REQUEST_SUCCESS:
      return { isRequesting:false, value: action.payload };
    case QRCodeConstants.QRCODE_REQUEST_FAIL:
      return { isRequesting:false, error: action.payload };
    default:
      return state;
  }
}
