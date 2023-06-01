const server = require("./src/src.js");
"use strict";

const fastify = require("fastify")();
fastify.register(require("@fastify/websocket"));

const { spawn } = require('child_process');



// Binance USD-T
fastify.register(require('@fastify/cors'), async function (fastify) {
  
  server.server(fastify);


});

fastify.listen( { port: 8080 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});


// Command to start the other Node.js file
const nodeFile = 'server_2.js';
const child = spawn('node', [nodeFile]);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
}
);

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
}
);

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
}
);
