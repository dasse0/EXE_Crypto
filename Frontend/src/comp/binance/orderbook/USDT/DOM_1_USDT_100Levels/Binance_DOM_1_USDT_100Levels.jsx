import React, { useEffect, useState } from "react";
import "../../../../binance/orderbook/USDT/Binance_DOM.css";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function Binance_DOM_1_USDT_100Levels() {
  const [data, setData] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/depth?symbol=ETHUSDT&limit=100"
        );
        setData(response.data.asks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    //merge bid by ever 0.1 price and sum quantity
    const mergedData = data.reduce((acc, item) => {
      const price = Math.floor(item[0] * 10) / 10;
      const quantity = item[1];
      const existingItem = acc.find((i) => i.price === price);
      if (existingItem) {
        existingItem.quantity += parseFloat(quantity);
      } else {
        acc.push({ price, quantity });
      }
      return acc;
    }, []);
    setMergedData(mergedData);
  }, [data]);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>

          </tr>
        </thead>
        <tbody>
          {mergedData.map((item) => (
            <tr key={item.price}>
              <td>{item.price}</td>
              <td>{item.quantity
              
              }</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
