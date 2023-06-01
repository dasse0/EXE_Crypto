const binance_ws_usdt_marketdata = require("./market_data/usdt/binance_ws_usdt_marketdata");
const binance_ws_spot_marketdata = require("./market_data/spot/binance_ws_spot_marketdata");
const fastify = require("fastify")();
fastify.register(require("@fastify/websocket"));

async function binance_ws_usdt_marketdata_src(fastify) {
  binance_ws_usdt_marketdata.Binance_ws_usdt_marketdata(fastify);
  binance_ws_usdt_marketdata.Binance_ws_usdt_marketdata_kline(fastify);
  binance_ws_usdt_marketdata.Binance_ws_usdt_marketdata_ticker(fastify);
  
}

async function binance_ws_spot_marketdata_src(fastify) {
  binance_ws_spot_marketdata.Binance_ws_spot_marketdata(fastify);
  binance_ws_spot_marketdata.Binance_ws_spot_marketdata_kline(fastify);
  binance_ws_spot_marketdata.Binance_ws_spot_marketdata_ticker(fastify);

}

async function bn_src(fastify) {
  binance_ws_usdt_marketdata_src(fastify);
  binance_ws_spot_marketdata_src(fastify);
}

module.exports = { bn_src };
