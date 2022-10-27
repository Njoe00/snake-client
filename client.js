const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text

  const setUpInput = function () {
    const stdin = process.stdin;
    stdin.on("data", handleUserInput);
    stdin.setRawMode(true);
    stdin.setEndcoding("utf8");
    stdin.resume();
    return stdin;
  };

  const handleUserInput = function () {
    process.stdin.on('data', (key) => {
      process.stdout.write('.');
      if(key === "\u0003") {
        process.exit();
      }
    })
  };

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
