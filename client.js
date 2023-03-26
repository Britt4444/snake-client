const net = require('net');
const { IP, PORT } = require('./constants.js');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: RLI");
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
    process.exit();
  });
  return conn;
};

module.exports = { connect };