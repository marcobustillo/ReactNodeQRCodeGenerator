const express = require('express');
const app = express();

let qrcoderoute = require('./routes/index.js');

app.use('/api',qrcoderoute);

app.listen(6000,() => {
   console.log(`Server is Up! Listening to port 6000`)
})
