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
      if(key === "\u0003") {
        process.stdout.write('We\'re getting off this plane');
        process.exit();      
      } else if (key === "w") {
        connection.write("Move: up");
      } else if (key === "s") {
        connection.write("Move: down");
      } else if (key === "a") {
        connection.write("Move: left");
      } else if (key === 'd') {
        connection.write("Move: right");
      } else if (key === 'g') {
        connection.write("Say: GG");
      } else if (key === '1') {
        connection.write("Say: I'm 1st!");
      } else if (key === 'q') {
        connection.write("Say:Cya L8ter!");
      }
    })
  };

 


module.exports = setUpInput;