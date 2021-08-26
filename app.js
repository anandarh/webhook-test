const http = require('http');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        console.log(body);
        res.end('ok');
    });
    }
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'test-nodejs-dc182.appspot.com'
  });


// const content = 'Some content!'
  
// fs.writeFile('./test.txt', content, err => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     //file written successfully
//   })
  

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});