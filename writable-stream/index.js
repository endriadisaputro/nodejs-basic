const fs=require('fs');
const path = require('path');

const writableStream=fs.createWriteStream('./input.txt');
const readableStream=fs.createWriteStream('./input.txt',{
	highWaterMark:15
});

readableStream.on('readable',()=>{
	try{
		writableStream.write(`${readableStream.read()}\n`);
		console.log(`${readableStream.read()}\n`);
	} catch(error){
		console.log(error);
	}
})

path.resolve('/writable-stream/index.js');
readableStream.on('end',() => {
	console.log('done');
});