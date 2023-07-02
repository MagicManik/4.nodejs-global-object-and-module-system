const fs = require('fs');

// 1. to write file
// fs.writeFileSync('myfile.text', 'Hello Programmers.');
// 2. to append something new
// fs.appendFileSync('myfile.text', ' How are you?');
// 3. to read file
// const buffer = fs.readFileSync('myfile.text');
// console.log(buffer); // we got a buffer
// const realData = buffer.toString();
// console.log(realData);

// recomended way because this is i/o intensive task
// 1. to write file
fs.writeFile('myfile.text', 'Hello! good programmers.', (err) => {
    if (err) {
        console.log('something is wrong. file not created!');
    }
});
// 2. to append something new
fs.appendFile('myfile.text', ' How are you?', (err) => {
    if (err) {
        console.log(err);
    }
});
// 3. to read file
fs.readFile('myfile.text', (err, data) => {
    if (err) {
        console.log('something is wrong. unable to read file.');
    }
    if (data) {
        console.log(data.toString());
    }
});

console.log('hello world!');
