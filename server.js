import fs from 'fs';
import http from 'http';
// declaration server
const server = http.createServer();
//  for the sake of making a promise
let myBool = true;
// making it ready
const letGoServer = () => new Promise((res,rej) =>{
 if(myBool){
     const myServer = server.on('request', (request, response)=>{
        let src = fs.createReadStream('./test.txt');
        src.pipe(response);
        console.log('Well done Robby');
    });
    res(myServer);
 } else {
     let myError = console.log("Something wrong you fool");
     rej(new Error(myError));
 }
})

const start = () => letGoServer()
.then((data) => {
    console.log(data)
    })
    .catch((error) => (error.message));
export default start;

server.listen(4500);
console.log('Server listening in port 4500');