import React from "react";

export default function BinanceDOMUSDT1Orders() {
  return (
    <>
       <div
        className="Binance_DOM_USDT_2_Orders"
        style={{
          display: "flex",
          flexDirection: "column",

          overflow: "auto",
        }}
      >
        <input
          placeholder="QTY"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100%",
            height: "30px",
            border: "none",
            textAlign: "center",
            fontSize: "20px",
          }}
        />

        <div>
          <button
            style={{
              border: "1px solid gray",
              width: "50%",
              height: "30px",
              backgroundColor: "blue",
            }}
            className="Binance_DOM_Spot_Button_Mkt Buy"
          >
            LMT
          </button>
          <button
            style={{
              border: "1px solid gray",
              width: "50%",
              height: "30px",
              backgroundColor: "blue",
            }}
            className="Binance_DOM_Spot_Button_Mkt Buy"
          >
            MKT
          </button>
          <button
            style={{
              border: "1px solid gray",
              width: "50%",
              height: "30px",
              backgroundColor: "darkred",
            }}
            className="Binance_DOM_Spot_Button_Mkt Buy"
          >
            MKT
          </button>
          <button
            style={{
              border: "1px solid gray",
              width: "50%",
              height: "30px",
              backgroundColor: "darkred",
            }}
            className="Binance_DOM_Spot_Button_Mkt Buy"
          >
            LMT
          </button>
        </div>
        <button
          style={{
            backgroundColor: "darkgrey",
            height: "30px",
            color: "black",
          }}
          className="Binance_DOM_Spot_Button_Mkt Buy"
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: "orange",
            height: "30px",
            color: "black",
          }}
          className="Binance_DOM_Spot_Button_Mkt Buy"
        >
          Close
        </button>
      </div>
    </>
  );
}
