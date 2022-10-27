const connect = require("./client");

let connection;

const setUpInput = function (conn) {
  connection = conn;
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
      } else if (key === "w") {
        connection.write("Move: up");
      } else if (key === "s") {
        connection.write("Move: down");
      } else if (key === "a") {
        connection.write("Move: left");
      } else if (key === 'd') {
        connection.write("Move: right");
      }
    })
  };

 


module.exports = setUpInput;