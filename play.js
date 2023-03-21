// set up connection and return object

const net = require('net');

// establish connection with game server
const connect = require('./client.js');

console.log("Connecting...");
connect();