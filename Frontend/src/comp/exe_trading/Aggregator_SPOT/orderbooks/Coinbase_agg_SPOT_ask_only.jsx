import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { w3cwebsocket as WebSocketClient } from "websocket";

import "../AggreComponentStyle_SPOT.css";

const OrderBook = () => {

  const [asks, setAsks] = useState([]);

  const [updatedAsks, setUpdatedAsks] = useState([]);

  useEffect(() => {
    const websocket = new WebSocketClient("wss://ws-feed.pro.coinbase.com");

    const updateOrderBookBatched = () => {

      setAsks((prevAsks) =>
        updatedAsks.length > 0 ? [...updatedAsks] : prevAsks
      );
      setUpdatedBids([]);
      setUpdatedAsks([]);
    };

    let animationFrameId = null;

    websocket.onopen = () => {
      console.log("Connected to Coinbase WebSocket");
      const subscribeMsg = {
        type: "subscribe",
        product_ids: ["BTC-USDT"], // Replace with the desired product ID
        channels: ["level2"],
      };
      websocket.send(JSON.stringify(subscribeMsg));
    };

    websocket.onmessage = (message) => {
      const data = JSON.parse(message.data);

      if (data.type === "snapshot") {
        const { asks } = data;
    
        setAsks(asks);
      } else if (data.type === "l2update") {
        const changes = data.changes;
        for (const change of changes) {
          const [side, price, size] = change;
          if (side === "sell") {
            updateOrderBook(updatedAsks, price, size);
          }
        }

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateOrderBookBatched);
      }
    };

    const updateOrderBook = (updatedOrders, price, size) => {
      // Orders is an array of arrays containing price and size
      // Price is at index 0, size is at index 1

      // If size is 0, remove the order from the order book
      if (parseFloat(size) === 0) {
        for (let i = 0; i < updatedOrders.length; i++) {
          if (parseFloat(updatedOrders[i][0]) === parseFloat(price)) {
            updatedOrders.splice(i, 1);
            return;
          }
        }
      }

      // If the order is already in the order book, update it
      for (let i = 0; i < updatedOrders.length; i++) {
        if (parseFloat(updatedOrders[i][0]) === parseFloat(price)) {
          updatedOrders[i][1] = size;
          return;
        }
      }

      // If the order is not in the order book and size is not 0, add it
      if (parseFloat(size) !== 0) {
        updatedOrders.push([price, size]);
      }

      // Sort the orders by price
      updatedOrders.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));

      // Only keep the top 30 orders
      if (updatedOrders.length > 40) {
        updatedOrders.splice(40);
      }
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      websocket.close();
    };
  }, []);

  return (
    <div
      className="coinbase_agg"
      style={{
        fontSize: localStorage.getItem("DOMFONTSIZE") + "px",
      }}
    >
      <ul className="coinbase_agg">
        <td>
        <h4>CoinBase</h4>
          {asks.map((ask) => (
            <tr key={ask[0]}>
              <td
                style={{
                  color: "red",
                }}
              >
                {ask[0]}
              </td>
              <td className="order_seperator">|</td>
              <td>
                {ask[1] > 0.2 ? (
                  <span style={{ color: "red" }}>{ask[1]}</span>
                ) : (
                  <span style={{ color: "orange" }}>{ask[1]}</span>
                )}
              </td>
            </tr>
          ))}
        </td>
      </ul>
    </div>
  );
};

export default OrderBook;
