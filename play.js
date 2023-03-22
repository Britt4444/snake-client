// establish connection with game server
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log("Connecting...");

//set up variable to store return from connect function
const conn = connect();

//pass the return object into setupInput
setupInput(conn);

