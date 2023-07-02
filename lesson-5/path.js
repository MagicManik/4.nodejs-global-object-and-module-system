const path = require('path');

const myPath = '/home/manik/Node/5.nodejs-server-and-core-modules/path.js';

// 1. to get basename of path
const baseName1 = path.basename(myPath);
console.log(baseName1);
const baseName2 = path.basename(myPath, '.js');
console.log(baseName2);

// 2. to get extention name of path
const extName = path.extname(myPath);
console.log(extName);

// 3. to get directory name of path
const dirName = path.dirname(myPath);
console.log(dirName);

// 4. to get parts of path
const partsOfPath = path.parse(myPath);
console.log(partsOfPath);
