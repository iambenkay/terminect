const net = require("net"), fs = require("fs"), remote_server = process.argv[2];
let socket;

socket = remote_server ? net.connect(8000, remote_server) : net.connect(8000);

let ostream = fs.createWriteStream("./reciever/SC-02.pdf");
let date = new Date(), size = 0, elapsed;
socket.on('data', chunk => {
  size += chunk.length;
  elapsed = new Date() - date;
  socket.write(`\r${(size / (1024 * 1024)).toFixed(2)} MB of data was sent. Total elapsed time is ${elapsed / 1000} s`)
  process.stdout.write(`\r${(size / (1024 * 1024)).toFixed(2)} MB of data was sent. Total elapsed time is ${elapsed / 1000} s`);
  ostream.write(chunk);https://medium.com/@i_ambenkay/how-to-create-your-very-own-file-transfer-program-in-node-js-f57edef302c2
});
socket.on("end", () => {
  console.log(`\nFinished getting file. speed was: ${((size / (1024 * 1024)) / (elapsed / 1000)).toFixed(2)} MB/s`);
  process.exit();
});
