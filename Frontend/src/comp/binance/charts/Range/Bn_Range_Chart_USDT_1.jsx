import React, { useEffect } from "react"; 



function wss()
{
  var ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
  ws.addEventListener("message", function (event) {
    const data = JSON.parse(event.data);
  

  });

}
export default function Bn_Range_Chart_USDT_1() {
  useEffect(() => {
    wss();
  }, []);


  return (
    <>
      <div style={{ height: "1000px" }}>
        <h1>Chart</h1>
      </div>
    </>
  );



}
