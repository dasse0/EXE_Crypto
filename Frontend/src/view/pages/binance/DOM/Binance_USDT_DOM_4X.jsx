import React from "react";
import { Resizable } from "re-resizable";

import BinanceDOMUSDT1 from "../../../../comp/binance/orderbook/USDT/DOM_1_USDT/Binance_USDT_1";
import BinanceDOMUSDT2 from "../../../../comp/binance/orderbook/USDT/DOM_2_USDT/Binance_USDT_2";
import BinanceDOMUSDT3 from "../../../../comp/binance/orderbook/USDT/DOM_3_USDT/Binance_USDT_3";
import BinanceDOMUSDT4 from "../../../../comp/binance/orderbook/USDT/DOM_4_USDT/Binance_USDT_4";

import BinanceDOMUSDT1_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_1";
import BinanceDOMUSDT2_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_2";
import BinanceDOMUSDT3_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_3";
import BinanceDOMUSDT4_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_4";

export default class Main extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#000",

            fontFamily: "monospace",
          }}
        >
          {/* <Navbar/> */}
          <div className="Navbar">
            <div
              style={{
                backgroundColor: "black",
                color: "orange",
                fontSize: "16px",
                bold: "true",
                fontFamily: "monospace",
                textDecoration: "none",
                padding: "0px",
                borderColor: "darkorange",
                borderBottom: "1px solid darkorange",
                borderBottomColor: "darkorange",
                height: "50px",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h6
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  paddingLeft: "10px",
                }}
              >
                EXE Trading
              </h6>
              <div
                style={{
                  backgroundColor: "black",
                  color: "orange",
                  fontSize: "16px",
                  bold: "true",
                  fontFamily: "monospace",
                  textDecoration: "none",
                  padding: "10px",
                  borderColor: "darkorange",
                  borderBottom: "1px solid darkorange",
                  borderBottomColor: "darkorange",
                  height: "50px",
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => {
                    window.location.href = "/EXE_Trading";
                  }}
                  style={{
                    height: "30px",
                    width: "80px",
                    borderRadius: "10px",
                    border: "1px solid red",
                    backgroundColor: "#400",

                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/EXE_Trading";
                  }}
                  style={{
                    height: "30px",
                    width: "80px",
                    borderRadius: "10px",
                    border: "1px solid cyan",
                    backgroundColor: "#45f",
                    marginLeft: "10px",

                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Spot
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/EXE_Trading";
                  }}
                  style={{
                    height: "30px",
                    width: "80px",
                    borderRadius: "10px",
                    border: "1px solid limegreen",
                    backgroundColor: "#060",
                    marginLeft: "10px",

                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  COIN-M
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/EXE_Trading/Settings";
                  }}
                  style={{
                    height: "30px",
                    width: "100px",
                    borderRadius: "10px",
                    border: "1px solid yellow",
                    backgroundColor: "#660",
                    marginLeft: "10px",

                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr",

              height: "50vh",
            }}
          >
            <BinanceDOMUSDT1 />
            <BinanceDOMUSDT2 />
            <BinanceDOMUSDT3 />
            <BinanceDOMUSDT4 />

            <div
              className="Position"
              style={{
                height: "50vh",
              }}
            >
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
