import axios from 'axios';
import { QRCodeConstants } from '../constants';

export const createQR = () => dispatch => {
  dispatch({
    type:QRCodeConstants.QRCODE_REQUEST
  })
  axios.get('/api/qrcode')
  .then(res => {
    dispatch({
      type:QRCodeConstants.QRCODE_REQUEST_SUCCESS,
      payload:res.data
    })
  }).catch(error => {
    console.log(error);
  });
}
