"use strict";

const fastify = require("fastify")();
fastify.register(require("@fastify/websocket"));

//== Bybit ================================================================================================
async function bybit_ws_spot_depth(fastify) {
  //-- Trades ---------------------------------------------------------------------------------------------------------
  fastify.get(
    "/bybit_spot/ws/depth",
    { websocket: true },
    (
      connection /* SocketStream */,
      req /* 
        FastifyRequest */
    ) => {
      const symbol = req.params.symbol.uppercase();
      const bybitws_URL = "wss://stream.bybit.com/v5/public/linear";
      const WebSocket = require("ws");
      const ws = new WebSocket(bybitws_URL);

      // Don't forget function incoming(data) otherwise the data won't show up

      ws.on("open", function open() {
        console.log("Connected to ByBit WebSocket");
        const subscribeMsg = {
          op: "subscribe",
          args: ["orderbook.50.BTCUSDT"],
        };

        websocket.send(JSON.stringify(subscribeMsg));
      });

      ws.on("message", function incoming(data) {
        const TradeData = JSON.parse(data);
        connection.socket.send(JSON.stringify(TradeData));
      });
    }
  );
}


module.exports = {
    bybit_ws_spot_depth,
}
