const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    console.log("Name: RLI");

    // Move snake immediately on connection
    // conn.write("Move: up");

    // Move snake up every 50 ms with setTimeout
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 550);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 600);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 650);

    // Trial with setInterval: snake crashes because no clearInterval
    // setInterval(() => {
    //   conn.write("Move: up");
    // });
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

module.exports = { connect };