"use strict";

const fastify = require("fastify")();
fastify.register(require("@fastify/websocket"));

//== Binance USD-T ================================================================================================
async function Binance_ws_usdt_marketdata(fastify) {
  //-- Trades ---------------------------------------------------------------------------------------------------------
  fastify.get(
    "/binance/ws/aggtrade/:symbol",
    { websocket: true },
    (connection /* SocketStream */, req /* FastifyRequest */) => {
      const symbol = req.params.symbol;
      const bnURL = "wss://fstream.binance.com/ws/" + symbol + "@trade";
      const WebSocket = require("ws");
      const ws = new WebSocket(bnURL);
      // Don't forget function incoming(data) otherwise the data won't show up
      ws.on("message", function incoming(data) {
        const TradeData = JSON.parse(data);
        connection.socket.send(JSON.stringify(TradeData));
      });
    }
  );

  //-- Depth 20 100ms ---------------------------------------------------------------------------------------------------------
  fastify.get(
    "/binance/ws/depth/:symbol",
    { websocket: true },
    (connection /* SocketStream */, req /* FastifyRequest */) => {
      const symbol = req.params.symbol;
      const bnURL = "wss://fstream.binance.com/ws/" + symbol + "@depth20@100ms";
      const WebSocket = require("ws");
      const ws = new WebSocket(bnURL);
      ws.on("message", function incoming(data) {
        const DepthData = JSON.parse(data);
        connection.socket.send(JSON.stringify(DepthData));
      });
    }
  );
}

async function Binance_ws_usdt_marketdata_kline(fastify) {
  //-- Kline 1m 100ms ---------------------------------------------------------------------------------------------------------
  fastify.get(
    "/binance/ws/kline1m/:symbol",
    { websocket: true },
    (connection /* SocketStream */, req /* FastifyRequest */) => {
      const symbol = req.params.symbol;
      const bnURL = "wss://fstream.binance.com/ws/" + symbol + "@kline_1m";
      const WebSocket = require("ws");
      const ws = new WebSocket(bnURL);
      ws.on("message", function incoming(data) {
        const KlineData = JSON.parse(data);
        connection.socket.send(JSON.stringify(KlineData));
      });
    }
  );
}

setTimeout(() => {
  Binance_ws_usdt_marketdata_kline(fastify);
}, 3000);

function Binance_ws_usdt_marketdata_ticker(fastify) {
  //-- Kline 1m 100ms ---------------------------------------------------------------------------------------------------------
  fastify.get(
    "/binance/ws/ticker5s/:symbol",
    { websocket: true },
    (connection /* SocketStream */, req /* FastifyRequest */) => {
      const symbol = req.params.symbol;
      const bnURL = "wss://fstream.binance.com/ws/" + symbol + "@ticker";
      const WebSocket = require("ws");
      const ws = new WebSocket(bnURL);
      ws.on("message", function incoming(data) {
        const KlineData = JSON.parse(data);
        connection.socket.send(JSON.stringify(KlineData));
      });
    }
  );
}
setTimeout(() => {
  Binance_ws_usdt_marketdata_ticker(fastify);
}, 3000);

module.exports = {
  Binance_ws_usdt_marketdata,
  Binance_ws_usdt_marketdata_kline,
  Binance_ws_usdt_marketdata_ticker,
  setTimeout,
};
