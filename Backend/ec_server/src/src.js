const bn_src = require("./exch/binance/bn_src.js");

async function server(fastify) {
    bn_src.bn_src(fastify);
    }

module.exports = { server };