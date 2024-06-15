const https = require('https');

const url = 'https://class-seat-checker.onrender.com/'; // Replace with your target URL

function visitUrl() {
  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log(`Status Code: ${res.statusCode}`);
      console.log(`BODY: ${data}`);
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

visitUrl();
