//creating routing using node js

const fs=require('fs');
const http = require('http');
const url = require('url');
const template=fs.readFileSync('index.html' , 'utf-8');
const server=http.createServer((req,res) => {
    const pathName=req.url;
    if(pathName === '/Review' || pathName === '/') {
        res.end('This is the Review')
    }else if(pathName === '/contact'){
        res.end('this is the contact')
    }
});
server.listen(3000, '127.0.0.1', () => {
    console.log('listening to port at 3000');
});