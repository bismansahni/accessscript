const https = require('https');
const url = 'https://class-seat-checker.onrender.com/'; 

function visitUrl() {
  https.get(url, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

// Call visitUrl every 2 minutes
setInterval(visitUrl, 2 * 60 * 1000);

// Initial call to start the interval
visitUrl();
