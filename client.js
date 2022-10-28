const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log('Connection to server established');
    conn.write("Name: WIN"),
   

    conn.on('data', data => {
      console.log(data);
    })
});

  return conn;
};

console.log("Connecting ...");
connect();


module.exports = connect;
