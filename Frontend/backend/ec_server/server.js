const server = require("./src/src.js");
"use strict";

const fastify = require("fastify")();
fastify.register(require("@fastify/websocket"));

// Binance USD-T
fastify.register(async function (fastify) {
  server.server(fastify);


});

fastify.listen({ port: 8080 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
