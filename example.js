// const fs = require('fs');
import fs from 'fs';

const output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = [];
    console.log('hello', line);
    return customers;
  }, {})

console.log('output', output);
