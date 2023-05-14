import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function BinanceExchange() {
 //eslint-disable-next-line
 const [binanceSpot, setBinanceSpot] = useState([]);
 const [binanceFuturesUSDT, setBinanceFuturesUSDT] = useState([]);

 useEffect(() => {
  
  async function fetchBiancneFutures_USDT() {
   const response = await axios.get(
    "https://fapi.binance.com/fapi/v1/ticker/24hr"
   );
   const data = await response.data;

   setBinanceFuturesUSDT(data);
   setTimeout(100000);
  }

  fetchBiancneFutures_USDT();
 }, []);

 if (binanceSpot.length === 0) {
  return (
   <div
    style={{
     height: "100vh",
     backgroundColor: "black",
     paddingTop: "50vh",
    }}
   >
    <h1 style={{ color: "white" }}>Loading...</h1>
   </div>
  );
 }

 return (
  <div
   style={{
    backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    color: "orange",
    fontFamily: "monospace",
    fontSize: "16px",
   }}
  >
   <div>
    <nav
     style={{
      backgroundColor: "black",
      color: "orange",
      fontSize: "16px",
      bold: "true",
      fontFamily: "monospace",
      textDecoration: "none",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "5px",
      paddingBottom: "5px",
     }}
    >
     <ul
      style={{
       display: "flex",
       margin: "0",
       padding: "0",
       listStyle: "none",
      }}
     >
      <li>
       <a
        style={{
         textDecoration: "none",
         color: "red",
        }}
        href="/MarketOverview"
       >
        Back
       </a>
      </li>

      <li>
       <a
        style={{
         textDecoration: "none",
         paddingLeft: "100px",
        }}
        href="/BinanceTradeSpot"
       >
        Trade
       </a>
      </li>

      <div
       style={{
        paddingLeft: "100px",
        alignItems: "center",
        justifyContent: "center",
       }}
      ></div>
     </ul>
    </nav>
   </div>
   {/*=============================================================================================================*/}
   <Table
      variant="dark"
      hover
      size="sm"
      style={{
       color: "orange",
       backgroundColor: "black",
       borderColor: "gray",
       fontSize: "12px",
       fontFamily: "monospace",
       hover: "true",
      }}
     >
      {/* Header bar */}
      <thead
       style={{
        backgroundColor: "black",
        color: "orange",
        fontSize: "12px",
        bold: "true",
        fontFamily: "monospace",
        textDecoration: "none",
        paddingLeft: "10px",
        paddingRight: "10px",

        paddingBottom: "5px",
        textAlign: "left",
       }}
      >
       <tr
        style={{
         position: "sticky",
         top: -2,
         backgroundColor: "#510000",

         fontSize: "1em",
        }}
       >
        <th
         style={{
          width: "0.01%",
          textAlign: "right",
         }}
        >
         {" "}
         <div
          style={{
           width: "100%",
           display: "flex",
           justifyContent: "right",
           paddingRight: "10px",
          }}
         >
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.symbol > b.symbol
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8593;
          </button>
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.symbol < b.symbol
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8595;
          </button>
         </div>
         Symbol |
        </th>

        <th>
         <div
          style={{
           width: "100%",
           display: "flex",
           justifyContent: "left",
          }}
         >
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.lastPrice > b.lastPrice
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8593;
          </button>
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.lastPrice < b.lastPrice
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8595;
          </button>
         </div>
         Price
        </th>
        <th>
         <div
          style={{
           width: "100%",
           display: "flex",
           justifyContent: "left",
          }}
         >
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.priceChange > b.priceChange
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8593;
          </button>
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.priceChange < b.priceChange
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8595;
          </button>
         </div>
         Change{" "}
        </th>
        <th>
         <div
          style={{
           width: "100%",
           display: "flex",
           justifyContent: "left",
          }}
         >
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.priceChangePercent > b.priceChangePercent
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8593;
          </button>
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.priceChangePercent < b.priceChangePercent
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8595;
          </button>
         </div>
         Change %
        </th>
        <th>
         <div
          style={{
           width: "100%",
           display: "flex",
           justifyContent: "left",
          }}
         >
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.volume > b.volume
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8593;
          </button>
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.volume < b.volume
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8595;
          </button>
         </div>
         Base Volume
        </th>
        <th>
         <div
          style={{
           width: "100%",
           display: "flex",
           justifyContent: "left",
          }}
         >
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.quoteVolume > b.quoteVolume
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8593;
          </button>
          <button
           style={{
            borderRadius: "5px",
            height: "30px",
           }}
           onClick={() => {
            const sort = [...binanceFuturesUSDT].sort(
             (a, b) => a.quoteVolume < b.quoteVolume
            );
            setBinanceFuturesUSDT(sort);
           }}
          >
           &#8595;
          </button>
         </div>
         Quote Volume
        </th>

       </tr>
      </thead>
      {/* Body */}
      <tbody
       style={{
        textAlign: "left",
       }}
      >
       {binanceFuturesUSDT.map((binanceFuturesUSDT) => (
        <tr
         key={binanceFuturesUSDT.symbol}
         onClick={() => {
          localStorage.setItem(
           "Binance_Symbol_USDT",
           binanceFuturesUSDT.symbol.toLowerCase()
          );
          window.location.href = "/BinanceTradeUSDT";
         }}
        >
         <td
          style={{
           textAlign: "right",
           fontWeight: "bold",
           color: "white",
           paddingRight: "10px",
          }}
         >
          {binanceFuturesUSDT.symbol}
         </td>

         <td>{binanceFuturesUSDT.lastPrice}</td>
         <td>
          {binanceFuturesUSDT.priceChange < 0 ? (
           <span style={{ color: "red" }}>
            {binanceFuturesUSDT.priceChange}
           </span>
          ) : (
           <span style={{ color: "cyan" }}>
            {binanceFuturesUSDT.priceChange}
           </span>
          )}
         </td>

         <td>
          {binanceFuturesUSDT.priceChangePercent < 0 ? (
           <span style={{ color: "red" }}>
            {binanceFuturesUSDT.priceChangePercent}
           </span>
          ) : (
           <span style={{ color: "cyan" }}>
            {binanceFuturesUSDT.priceChangePercent}
           </span>
          )}{" "}
          %
         </td>
         <td>{binanceFuturesUSDT.volume}</td>
         <td>{binanceFuturesUSDT.quoteVolume}</td>

        </tr>
       ))}
      </tbody>
     </Table>
  </div>
 );
}
