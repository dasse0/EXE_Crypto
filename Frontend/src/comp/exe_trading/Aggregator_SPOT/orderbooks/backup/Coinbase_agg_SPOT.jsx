import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { w3cwebsocket as WebSocketClient } from "websocket";

import "../AggreComponentStyle_SPOT.css";

const OrderBook = () => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const [updatedBids, setUpdatedBids] = useState([]);
  const [updatedAsks, setUpdatedAsks] = useState([]);

  useEffect(() => {
    const websocket = new WebSocketClient("wss://ws-feed.pro.coinbase.com");

    const updateOrderBookBatched = () => {
      setBids((prevBids) =>
        updatedBids.length > 0 ? [...updatedBids] : prevBids
      );
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
        product_ids: ["BTC-USD"], // Replace with the desired product ID
        channels: ["level2"],
      };
      websocket.send(JSON.stringify(subscribeMsg));
    };

    websocket.onmessage = (message) => {
      const data = JSON.parse(message.data);

      if (data.type === "snapshot") {
        const { bids, asks } = data;
        setBids(bids);
        setAsks(asks);
      } else if (data.type === "l2update") {
        const changes = data.changes;
        for (const change of changes) {
          const [side, price, size] = change;
          if (side === "buy") {
            updateOrderBook(updatedBids, price, size);
          } else if (side === "sell") {
            updateOrderBook(updatedAsks, price, size);
          }
        }

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateOrderBookBatched);
      }
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      websocket.close();
    };
  }, []);

  const updateOrderBook = (updatedOrders, price, size) => {

    //removes if the size is 0 
    if (size === "0.00000000") {
      for (let i = 0; i < updatedOrders.length; i++) {
        if (updatedOrders[i][0] === price) {
          updatedOrders.splice(i, 1);
          break;
        }
      }
    } else {
      let found = false;
      for (let i = 0; i < updatedOrders.length; i++) {
        if (updatedOrders[i][0] === price) {
          updatedOrders[i][1] = size;
          found = true;
          break;
        }
      }
      if (!found) {
        updatedOrders.push([price, size]);
      }
    }

    //removes if the levels are more than 20
    if (updatedOrders.length > 10) {
      updatedOrders.splice(10, updatedOrders.length - 10);
    }

    //sorts the levels
    updatedOrders.sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      } else if (a[0] < b[0]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <ul className="coinbase_agg">
        {asks.map((ask, index) => (
          <tr key={index} style={{
            backgroundColor: "#550000",
          }}>
            <td>{ask[0]}</td>
            <td className="order_seperator">|</td>
            <td>{ask[1]}</td>
          </tr>
        
        ))
        }
        {bids.map((bid, index) => (
          <tr key={index} style={{
            backgroundColor: "#000055",
          }}>
            <td>{bid[0]}</td>
            <td className="order_seperator">|</td>
            <td>{bid[1]}</td>
          </tr>
        ))}
      </ul>
    </div>
  );
};

export default OrderBook;
