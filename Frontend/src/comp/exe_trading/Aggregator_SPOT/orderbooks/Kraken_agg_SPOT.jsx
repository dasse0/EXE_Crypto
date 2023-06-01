import React, { useEffect, useState } from "react";
import { w3cwebsocket as WebSocketClient } from "websocket";

const OrderBook = () => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    const websocket = new WebSocketClient("wss://ws.kraken.com");

    websocket.onopen = () => {
      console.log("Connected to Kraken WebSocket");

      // Subscribe to the order book channel
      const subscriptionMsg = {
        event: "subscribe",
        pair: ["XBT/USD"],
        subscription: {
          name: "book",
          depth: 40,
        },
      };
      websocket.send(JSON.stringify(subscriptionMsg));
    };

    websocket.onmessage = (message) => {
      const data = JSON.parse(message.data);

      if (Array.isArray(data) && data.length >= 4) {
        const [channelId, channelData] = data;

        if (channelData?.as) {
          setAsks(channelData.as);
        }

        if (channelData?.bs) {
          setBids(channelData.bs);
        }
      }
    };

    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div>
      <h2>Kraken Order Book</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {asks.map((ask) => (
            <tr key={ask[0]}>
              <td>{ask[0]}</td>
              <td>{ask[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid[0]}>
              <td>{bid[0]}</td>
              <td>{bid[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;