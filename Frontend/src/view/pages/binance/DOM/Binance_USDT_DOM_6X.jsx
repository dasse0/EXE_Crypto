import React from "react";
import { Resizable } from "re-resizable";

import BinanceDOMUSDT1 from "../../../../comp/binance/orderbook/USDT/DOM_1_USDT/Binance_USDT_1";
import BinanceDOMUSDT2 from "../../../../comp/binance/orderbook/USDT/DOM_2_USDT/Binance_USDT_2";
import BinanceDOMUSDT3 from "../../../../comp/binance/orderbook/USDT/DOM_3_USDT/Binance_USDT_3";
import BinanceDOMUSDT4 from "../../../../comp/binance/orderbook/USDT/DOM_4_USDT/Binance_USDT_4";
import BinanceDOMUSDT5 from "../../../../comp/binance/orderbook/USDT/DOM_5_USDT/Binance_USDT_5";
import BinanceDOMUSDT6 from "../../../../comp/binance/orderbook/USDT/DOM_6_USDT/Binance_USDT_6";

import BinanceDOMUSDT1_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_1";
import BinanceDOMUSDT2_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_2";
import BinanceDOMUSDT3_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_3";
import BinanceDOMUSDT4_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_4";
import BinanceDOMUSDT5_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_5";
import BinanceDOMUSDT6_Chart from "../../../../comp/binance/charts/Candlestick/Bn_Candlestick_Chart_USDT_6";

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
              height: "95vh",
              display: "grid",
              gridTemplateColumns: "repeat(6, 6fr)",
              gridTemplateRows: "repeat(2, 2fr)",

              gridAutoFlow: "column",

              //row

              backgroundColor: "#000",
            }}
          >
            {/* ===================1====================== */}
            <div>
              <BinanceDOMUSDT1
                className="Binance_USDT_DOM-1"
                style={{
                  width: "50vh",
                }}
              />
            </div>
            <div className="BinanceCandlestickChart_1">
              <BinanceDOMUSDT1_Chart />
            </div>

            {/* ===================2====================== */}
            <div>
              <BinanceDOMUSDT2
                className="Binance_USDT_DOM-2"
                style={{
                  width: "50vh",
                }}
              />
            </div>
            <div className="BinanceCandlestickChart_2">
              <BinanceDOMUSDT2_Chart />
            </div>

            {/* ===================3====================== */}
            <div>
              <BinanceDOMUSDT3
                className="Binance_USDT_DOM-3"
                style={{
                  width: "50vh",
                }}
              />
            </div>
            <div className="BinanceCandlestickChart_3">
              <BinanceDOMUSDT3_Chart />
            </div>
            {/* ===================4====================== */}
            <div>
              <BinanceDOMUSDT4
                className="Binance_USDT_DOM-4"
                style={{
                  width: "50vh",
                }}
              />
            </div>
            <div className="BinanceCandlestickChart_4">
              <BinanceDOMUSDT4_Chart />
            </div>
            {/* ===================5====================== */}
            <div>
              <BinanceDOMUSDT5
                className="Binance_USDT_DOM-5"
                style={{
                  width: "50vh",
                }}
              />
            </div>
            <div className="BinanceCandlestickChart_5">
              <BinanceDOMUSDT5_Chart />
            </div>
            {/* ===================6====================== */}
            <div>
              <BinanceDOMUSDT6
                className="Binance_USDT_DOM-6"
                style={{
                  width: "50vh",
                }}
              />
            </div>
            <div className="BinanceCandlestickChart_6">
              <BinanceDOMUSDT6_Chart />
            </div>
          </div>
        </div>
      </>
    );
  }
}
