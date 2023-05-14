import React from "react";
import { useState, useEffect } from "react";


export default function CryptoInfo() {
 const [cryptoDescription, setCryptoDescription] = useState([]);
 //eslint-disable-next-line
 const [cryptoId, setCryptoId] = useState([]);

 const id = localStorage.getItem("id");

 useEffect(() => {
  const fetchCryptoDescription = async () => {
   const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/" +
     id +
     "?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
   );

   const data = await response.json();

   setCryptoDescription(
    data.description.en
     .replace(/<a.*?>/g, "")
     .replace(/<\/a>/g, "")
     .replace(/<p>/g, "")
     .replace(/<\/p>/g, "")
     .replace(/href=".*?"/g, "")
   );
  };
  fetchCryptoDescription();
 }, [id]);

 if (
  cryptoDescription === undefined ||
  cryptoId === undefined ||
  cryptoId === null
 ) {
  return <div>Loading...</div>;
 }

 return (
  <div
   className="cryptoInfo"
   style={{
    color: "white",

    overflow: "hidden",

    height: "100vh",
   }}
  >
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
     textAlign: "left",
     borderBottom: "1px solid gray",

     width: "100%",
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
       href="/EXE_Trading/MarketOverview"
      >
       Back
      </a>
     </li>
    </ul>
   </nav>

   <div
    className="cryptoInfo__container"
    style={{
     display: "flex",
     width: "100%",
     height: "100%",
     overflow: "hidden",
     color: "orange",
    }}
   >
    <div
     style={{
      overflowX: "hidden",
      overflowY: "auto",
      padding: "20px",
      paddingBottom: "50px",
      paddingLeft: "100px",
      paddingRight: "100px",

      height: "95%",

      color: "orange",
      fontSize: "18px",
      fontFamily: "monospace",
      textAlign: "left",
     }}
    >
     <div>
      {cryptoDescription ? cryptoDescription : "No description available"}
     </div>
    </div>
   </div>
  </div>
 );
}
