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


module.exports = setUpInput;