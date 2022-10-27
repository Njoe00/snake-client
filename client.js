const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text

  conn.on("connect", () => {
    console.log('Connection to server established');
    conn.write("Name: WIN"),
    setInterval (() =>  {
    // conn.write("Move: up"),
    }, 250);    

    conn.on('data', data => {
      console.log(data);
    })
});

  return conn;
};

console.log("Connecting ...");
connect();


module.exports = connect;
