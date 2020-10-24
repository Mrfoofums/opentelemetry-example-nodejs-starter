  
'use strict';


const DESTINATION_URL = process.env.DESTINATION_URL || 'http://localhost:8080/ping';

  const http = require('http');
  setInterval(() => {
    console.log('send: ping');

      http.get(DESTINATION_URL, resp => {
        let data = '';
        resp.on('data', chunk => (data += chunk));
        resp.on('end', () => console.log(`recv: ${data}`));
        resp.on('error', err => console.log('Error: ' + err.message));
      });

  }, 500);