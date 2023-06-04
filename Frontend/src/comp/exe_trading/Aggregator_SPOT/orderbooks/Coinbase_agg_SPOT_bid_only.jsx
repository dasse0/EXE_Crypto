import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { w3cwebsocket as WebSocketClient } from "websocket";

import "../AggreComponentStyle_SPOT.css";

const OrderBook = () => {
  const [bids, setBids] = useState([]);

  const [updatedBids, setUpdatedBids] = useState([]);

  useEffect(() => {
    const websocket = new WebSocketClient("wss://ws-feed.pro.coinbase.com");

    const updateOrderBookBatched = () => {
      setBids((prevBids) =>
        updatedBids.length > 0 ? [...updatedBids] : prevBids
      );

      setUpdatedBids([]);
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
        const { bids } = data;
        setBids(bids);
      } else if (data.type === "l2update") {
        const changes = data.changes;
        for (const change of changes) {
          const [side, price, size] = change;
          if (side === "buy") {
            updateOrderBook(updatedBids, price, size);
          }
        }

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateOrderBookBatched);
      }
    };

    const updateOrderBook = (updatedOrders, price, size) => {
      // Orders is an array of arrays containing price and size
      // Price is at index 0, size is at index 1

      // Convert to float
      price = parseFloat(price);
      size = parseFloat(size);

      // If size is 0, remove the order from the order book
      if (size === 0) {
        for (let i = 0; i < updatedOrders.length; i++) {
          if (parseFloat(updatedOrders[i][0]) === price) {
            updatedOrders.splice(i, 1);
            return;
          }
        }
      }

      // If the order is already in the order book, update it
      for (let i = 0; i < updatedOrders.length; i++) {
        if (parseFloat(updatedOrders[i][0]) === price) {
          updatedOrders[i][1] = size.toFixed(2);
          return;
        }
      }

      // If the order is not in the order book and size is not 0, add it
      if (size !== 0) {
        updatedOrders.push([price.toFixed(2), size.toFixed(2)]);
      }

      // Sort the orders by price
      updatedOrders.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));

      // Only keep the top 40 orders
      if (updatedOrders.length > 40) {
        updatedOrders.splice(40);
      }

      //keep in range of price  0.1% of the current price
      const currentPrice = parseFloat(updatedOrders[0][0]);
      const minPrice = currentPrice - midPrice * 0.001;
      const maxPrice = currentPrice + midPrice * 0.001;

      for (let i = 0; i < updatedOrders.length; i++) {
        if (
          parseFloat(updatedOrders[i][0]) < minPrice ||
          parseFloat(updatedOrders[i][0]) > maxPrice
        ) {
          updatedOrders.splice(i, 1);
          i--;
        }
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
        border: "1px solid #555",
        WebkitJustifyContent: "center",
      }}
    >
      <h4>CoinBase</h4>
      <ul className="coinbase_agg">
        <td>
          {bids
            .map((bid) => (
              <tr key={bid[0]}>
                <td
                  style={{
                    color: "cyan",
                  }}
                >
                  {bid[0]}
                </td>
                <td className="order_seperator">|</td>
                <td>
                  {bid[1] > 0.2 ? (
                    <span
                      style={{
                        color: "cyan",
                      }}
                    >
                      {bid[1]}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "orange",
                      }}
                    >
                      {bid[1]}
                    </span>
                  )}
                </td>
              </tr>
            ))
            .reverse()}
        </td>
      </ul>
    </div>
  );
};

export default OrderBook;
