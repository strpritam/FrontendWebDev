const fs=require('fs');
let content=fs.readFileSync('hello.txt');
console.log(content.toString());