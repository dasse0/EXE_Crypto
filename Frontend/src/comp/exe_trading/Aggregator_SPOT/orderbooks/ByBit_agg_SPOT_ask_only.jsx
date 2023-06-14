import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { w3cwebsocket as WebSocketClient } from "websocket";

import "../AggreComponentStyle_SPOT.css";

class BybitOrderbook extends Component {
  state = {
    asks: [],
    prevValue: [],
    orders: [],
  };

  componentDidMount() {
    const websocket = new WebSocketClient(
      "wss://stream.bybit.com/v5/public/linear"
    );

    websocket.onopen = () => {
      console.log("Connected to ByBit WebSocket");
      const subscribeMsg = {
        op: "subscribe",
        args: ["orderbook.50.BTCUSDT"],
      };

      websocket.send(JSON.stringify(subscribeMsg));
    };

    websocket.onmessage = (message) => {
      const data = JSON.parse(message.data);

      if (
        data &&
        data.type === "delta" &&
        data.data &&
        Array.isArray(data.data.a)
      ) {
        const changes = data.data.a;
        for (const change of changes) {
          const [price, size] = change;
          // 2 decimal places
          const formattedPrice = parseFloat(price).toFixed(1);
          const formattedSize = parseFloat(size).toFixed(1);
          this.updateOrderBook(this.state.asks, formattedPrice, formattedSize);
        }

        if (this.state.asks.length > 0) {
          this.setState({
            orders: this.state.asks,
          });
        }
      }
    };

    websocket.onclose = () => {
      console.log("Disconnected from ByBit WebSocket");
    };
  }

  updateOrderBook(updatedOrders, price, size) {
    const newOrders = [...updatedOrders];
    const index = newOrders.findIndex((order) => order[0] === price);

    // If size is 0, remove the order from the order book

    if (parseFloat(size) === 0) {
      for (let i = 0; i < newOrders.length; i++) {
        if (newOrders[i][0] === price) {
          newOrders.splice(i, 1);
          return;
        }
      }
    }
    // If the price level exists, update the size

    for (let i = 0; i < newOrders.length; i++) {
      if (newOrders[i][0] === price) {
        newOrders[i][1] = size;
        return;
      }
    }

    if (index > -1) {
      if (size === 0) {
        newOrders.splice(index, 1);
      } else {
        newOrders[index][1] = size;
      }
    } else {
      newOrders.push([price, size]);
    }

    // Sort asks by ascending order
    newOrders.sort((a, b) => a[0] - b[0]);

    // Limit asks to 40 rows

    if (newOrders.length > 40) {
      newOrders.splice(0, newOrders.length - 40);
    }

    this.setState({
      asks: newOrders,
    });


  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.asks !== this.state.asks) {
      this.setState({
        prevValue: this.state.asks,
      });
    }
  }
  
  


  render() {
    return (
      <div
        className="coinbase_agg"
        style={{
          fontSize: localStorage.getItem("DOMFONTSIZE") + "px",
          border: "1px solid #555",

          WebkitJustifyContent: "center",
        }}
      >
        {" "}
        <h4>ByBit</h4>
        <ul className="coinbase_agg">
          <td>
            {this.state.asks.map((ask, index) => (
              <tr key={index}>
                <td
                  style={{
                    color: "red",
                  }}
                >
                  {ask[0]}
                </td>
                <td className="order_seperator">|</td>

                <td>{ask[1]}</td>
              </tr>
            ))}
          </td>
        </ul>
      </div>
    );
  }
}
export default BybitOrderbook;
