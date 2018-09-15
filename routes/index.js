const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

router.get('/qrcode',(req,res)=>{

  let jungleBook = `test@gmail.com`;
  let opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      rendererOpts: {
        quality: 0.3,
        width: '512'
      }
  };

  QRCode.toDataURL(jungleBook,opts,function (err, url) {
    if (err) console.log('error: ' + err)
    res.status(200).send(url);
    // fs.readFile(path.resolve('html/qrcode.html'),'utf8',(err,data)=>{
    //   if (err) {
    //        return console.log(err);
    //
    //    }
    //    let qrCodeHtml = `
    //    <!DOCTYPE html>
    //      <html>
    //         <head>
    //            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    //            <title>Test</title>
    //         </head>
    //      <body>
    //          <div id="container">
    //          <img src=${url} />
    //          </div>
    //      </body>
    //      </html>
    //    `;
    //
    //    fs.writeFile(path.resolve('html/qrcode.html'),qrCodeHtml,'utf8',(err)=>{
    //      if (err) return console.log(err);
    //      res.sendFile(path.resolve('html/qrcode.html'));
    //    });
    // })
  })

})

module.exports = router;
