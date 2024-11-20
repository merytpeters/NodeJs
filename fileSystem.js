#!/usr/bin/node
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node.js file!', (err) => {
  if (err) throw err;
  console.log('File has been written!');
});
