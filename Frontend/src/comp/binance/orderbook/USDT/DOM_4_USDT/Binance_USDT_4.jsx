import React, { useReducer, useEffect } from "react";
import { useCallback, useState } from "react";

import Table from "react-bootstrap/Table";
import { Resizable } from "re-resizable";

import { Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import TabContent from "react-bootstrap/TabContent";
import "../../../../binance/orderbook/USDT/Binance_DOM.css";

import {
  DOM_Table_height,
  DOM_Trade_height,
  DOMFONTSIZE,
  binance_symbol_4,
  DOM_4_Binance_Trade_Quantity_Filter,
  DOM_4_BinanceQuantityFilter_low,
  DOM_4_BinanceQuantityFilter_high,
  DOM_4_Binance_Trade_Quantity_Filter_Highlight,
} from "../../../../../lib/Binance/Global/GlobalVariables";

import "bootstrap/dist/css/bootstrap.css";

import BinanceDOMUSDT4_Orders from "./Binance_DOM_4_Orders";

export default function Binance_USDT_2() {
  const [data, setData] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const [tickerData, setTickerData] = useState([]);

  const dataws = () => {
    const depth = new WebSocket(
      "ws://localhost:8080/binance/ws/depth/" + binance_symbol_4
    );
    const wss_aggTrade = new WebSocket(
      "ws://localhost:8080/binance/ws/aggtrade/" + binance_symbol_4
    );
    const ticker = new WebSocket(
      "ws://localhost:8080/binance/ws/ticker5s/" + binance_symbol_4
    );
    depth.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      JSON.stringify(data);

      const bids = data.b;
      const asks = data.a;

      const bidsData = bids.map((bids) => {
        return {
          price: bids[0],
          quantity: bids[1],
        };
      });

      const asksData = asks.map((ask) => {
        return {
          price: ask[0],
          quantity: ask[1],
        };
      });
      setData({
        bids: bidsData,
        asks: asksData,
      });
    });

    wss_aggTrade.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      JSON.stringify(data);
      const quantity =
        data.q > DOM_4_Binance_Trade_Quantity_Filter ? data.q : null;
      const isBuyerMaker = data.m ? "B" : "S";

      setTradeData((data) => [...data, { quantity, isBuyerMaker }]);
    });

    ticker.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      JSON.stringify(data);
      setTickerData(data);
    });
    return () => {
      ticker.removeEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        JSON.stringify(data);
        setTickerData(data);
      });

      depth.removeEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        JSON.stringify(data);

        const bids = data.b;
        const asks = data.a;

        const bidsData = bids.map((bids) => {
          return {
            price: bids[0],
            quantity: bids[1],
          };
        });

        const asksData = asks.map((ask) => {
          return {
            price: ask[0],
            quantity: ask[1],
          };
        });
        setData({
          bids: bidsData,
          asks: asksData,
        });
      });

      wss_aggTrade.removeEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        JSON.stringify(data);
        const quantity =
          data.q > DOM_4_Binance_Trade_Quantity_Filter ? data.q : null;
        const isBuyerMaker = data.m ? "B" : "S";
        setTradeData((data) => [...data, { quantity, isBuyerMaker }]);
      });
    };
  };

  useEffect(() => {
    dataws();
  }, []);

  return (
    <>
      {/*  Put "<>" and then div to prevent the ticker trade bug, It solves the double print bug.  */}
      <div
        style={{
          fontSize: localStorage.getItem("DOMFONTSIZE") + "px",
          backgroundColor: "#000",
          color: "orange",
          fontFamily: "monospace",
          fontSmooth: "always",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <input
            type="text"
            placeholder={binance_symbol_4}
            onChange={(e) => {
              localStorage.setItem("Binance_Symbol_USDT_DOM_4", e.target.value);
            }}
            style={{
              backgroundColor: "black",
              border: "1px solid gray",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          />
          <button
            onClick={() => {
              window.location.reload();
            }}
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "5px",
              border: "1px solid gray",
              marginLeft: "10px",
              marginTop: "10px",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            Enter
          </button>
        </div>

        <Tabs
          defaultActiveKey="DOM"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="DOM" title="DOM">
            <TabContent
              style={{
                width: "100%",
                backgroundColor: "#000",
                color: "orange",
                display: "flex",
                fontSize: localStorage.getItem("DOMFONTSIZE") + "px",
                lineHeight: DOM_Table_height + "px",
              }}
            >
              {/* BID Table & Ask Table */}
              <Resizable
                defaultSize={{
                  width: "70%",
                }}
                style={{
                  width: "10%",
                  maxheight: "52vh",
                  overflowY: "hidden",
                  overflowX: "hidden",
                }}
              >
                {/* Ticker Stream*/}
                <Table
                  bordered
                  variant="dark"
                  size="sm"
                  style={{
                    color: "orange",
                  }}
                >
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Chg $</th>
                      <th>Chg %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickerData && (
                      <tr>
                        <td>{tickerData.c}</td>
                        <td>
                          {tickerData.p > 0 ? (
                            <span style={{ color: "cyan" }}>
                              {tickerData.p}
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>{tickerData.p}</span>
                          )}
                        </td>

                        <td>
                          {tickerData.P > 0 ? (
                            <span style={{ color: "cyan" }}>
                              {tickerData.P}
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>{tickerData.P}</span>
                          )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                {/* Ticker Volume Stream*/}
                <Table
                  bordered
                  variant="dark"
                  size="sm"
                  style={{
                    color: "orange",
                  }}
                >
                  <thead>
                    <tr>
                      <th>Base Vol</th>
                      <th>USD-M Vol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickerData && (
                      <tr>
                        <td>{tickerData.v}</td>
                        <td>{tickerData.q}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>

                <Table
                  bordered
                  hover
                  variant="dark"
                  size="sm"
                  style={{
                    backgroundColor: "#000",
                    color: "orange",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderColor: "#000",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        width: "100%",
                      }}
                    >
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  {/*  Ask Table */}
                  <tbody>
                    {data.asks &&
                      data.asks
                        .map((asks, index) => (
                          <tr key={index}>
                            <td
                              style={{
                                color: "red",
                                width: "50vw",
                                cursor: "pointer",
                              }}
                            >
                              {asks.price}
                            </td>
                            <td
                              style={{
                                width: "50%",
                                cursor: "pointer",
                              }}
                            >
                              {asks.quantity >
                              DOM_4_BinanceQuantityFilter_high ? (
                                <span
                                  style={{
                                    backgroundColor: "darkred",
                                    color: "white",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                  }}
                                >
                                  {asks.quantity}
                                </span>
                              ) : asks.quantity >
                                DOM_4_BinanceQuantityFilter_low ? (
                                <span
                                  style={{
                                    color: "red",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                  }}
                                >
                                  {asks.quantity}
                                </span>
                              ) : (
                                <span>{asks.quantity}</span>
                              )}
                            </td>
                          </tr>
                        ))
                        .reverse()}
                    {/*  Put reverse here to abstain Laggy Bug */}
                  </tbody>
                  <tfoot
                    style={{
                      backgroundColor: "#777",
                      width: "100%",
                      height: "1px",
                    }}
                  ></tfoot>

                  {/*  Bid Table */}
                  <tbody>
                    {data.bids &&
                      data.bids.map((bids, index) => (
                        <tr key={index}>
                          <td
                            style={{
                              color: "cyan",
                              width: "50vw",
                              cursor: "pointer",
                            }}
                          >
                            {bids.price}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              cursor: "pointer",
                            }}
                          >
                            {bids.quantity >
                            DOM_4_BinanceQuantityFilter_high ? (
                              <span
                                style={{
                                  backgroundColor: "blue",
                                  color: "white",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                }}
                              >
                                {bids.quantity}
                              </span>
                            ) : bids.quantity >
                              DOM_4_BinanceQuantityFilter_low ? (
                              <span
                                style={{
                                  color: "cyan",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                }}
                              >
                                {bids.quantity}
                              </span>
                            ) : (
                              <span>{bids.quantity}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Resizable>
              {/*  Trade Table */}

              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#222",

                    width: "100%",
                    textAlign: "left",
                    overflowY: "hidden",
                    textDecoration: "none",
                    listStyle: "none",
                  }}
                  
                >
                  <BinanceDOMUSDT4_Orders />
                </div>

                <ul
                  style={{
                    lineHeight: "1",
                    height: DOM_Trade_height + "px",
                    fontSize: "0.8rem",    

                    textAlign: "left",
                    overflowY: "hidden",
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "-20px",
                  }}
                  id="trades"
                >
                  Traded
                  {tradeData
                    .slice(-50, data.length)
                    .map((trade, index) => (
                      <li key={index}>
                        {trade.isBuyerMaker === "B" ? (
                          <span style={{ color: "red" }}>
                            {trade.quantity >
                            DOM_4_Binance_Trade_Quantity_Filter_Highlight ? (
                              <span
                                style={{
                                  backgroundColor: "darkred",
                                  color: "white",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                }}
                              >
                                {trade.quantity}
                              </span>
                            ) : (
                              <span>{trade.quantity}</span>
                            )}
                          </span>
                        ) : (
                          <span style={{ color: "cyan" }}>
                            {trade.quantity >
                            DOM_4_Binance_Trade_Quantity_Filter_Highlight ? (
                              <span
                                style={{
                                  backgroundColor: "blue",
                                  color: "white",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                }}
                              >
                                {trade.quantity}
                              </span>
                            ) : (
                              <span>{trade.quantity}</span>
                            )}
                          </span>
                        )}
                      </li>
                    ))
                    .reverse()}
                </ul>
              </div>

              {/* Trade Table */}
              {/* <Resizable
              defaultSize={{
                width: "30%",
                height: "60vh",
              }}
              style={{
                width: "30%",
                maxheight: "60vh",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <Table
                style={{
                  color: "orange",
                  borderBlock: "1px solid #000",
                  height: "-webkit-fill-available",
                }}
                size="sm"
              >
                <thead>
                  <tr>
                    <th>Traded</th>
                  </tr>
                </thead>
                <tbody>
                  {tradeData &&
                    tradeData

                      .map(({ price, quantity, time, isBuyerMaker }, index) => (
                        //slice data and map it and reverse it for latset data	to be on top
                        <tr key={index}>
                          <td
                            style={{
                              display: "flex",
                              alignContent: "start",
                              justifyContent: "Center",
                              paddingLeft: "5px",
                            }}
                          >
                            {isBuyerMaker === "B" ? (
                              <span
                                style={{
                                  color: "red",
                                }}
                              >
                                {quantity >
                                DOM_1_Trade_Quantity_Filter_Highlight ? (
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: DOMFONTSIZE + 2,
                                      backgroundColor: "darkred",
                                      color: "white",
                                    }}
                                  >
                                    {quantity}
                                  </span>
                                ) : (
                                  <span>{quantity}</span>
                                )}
                              </span>
                            ) : (
                              <span
                                style={{
                                  color: "cyan",
                                }}
                              >
                                {quantity >
                                DOM_1_Trade_Quantity_Filter_Highlight ? (
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: DOMFONTSIZE + 2,
                                      backgroundColor: "blue",
                                      color: "white",
                                    }}
                                  >
                                    {quantity}
                                  </span>
                                ) : (
                                  <span>{quantity}</span>
                                )}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))

                      .slice(-50, -1)
                      .reverse()}
                </tbody>
              </Table>
            </Resizable>*/}
            </TabContent>
          </Tab>
          <Tab eventKey="options" title="Settings">
            <TabContent className="Tab-DOM-3-Settings">
              <br />
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  border: "1px solid cyan",
                }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Apply Changes
              </button>
              <br />
              <br />
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  border: "1px solid red",
                }}
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Clear to Default
              </button>
              <p>------------------------</p>

              <p>Font Size</p>
              <input
                type="number"
                placeholder={DOMFONTSIZE}
                onChange={(e) => {
                  localStorage.setItem("DOMFONTSIZE", e.target.value);
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }}
              />
              <p>------------------------</p>

              <p>DOM Highlight</p>
              <input
                type="number"
                placeholder={DOM_4_BinanceQuantityFilter_high}
                inputMode="numeric"
                onChange={(e) => {
                  localStorage.setItem(
                    "DOM_4_BinanceQuantityFilter_high",
                    e.target.value
                  );
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }}
              />

              <p>------------------------</p>
              <p>DOM Text Color </p>
              <input
                type="number"
                placeholder={DOM_4_BinanceQuantityFilter_low}
                onChange={(e) => {
                  localStorage.setItem(
                    "DOM_4_BinanceQuantityFilter_low",
                    e.target.value
                  );
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }}
              />
              <p>------------------------</p>

              <p>Trade Filter</p>
              <input
                type="number"
                placeholder={DOM_4_Binance_Trade_Quantity_Filter}
                onChange={(e) => {
                  localStorage.setItem(
                    "DOM_4_Binance_Trade_Quantity_Filter",
                    e.target.value
                  );
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }}
              />
              <p>------------------------</p>

              <p>Trade Highlight</p>
              <input
                type="number"
                placeholder={DOM_4_Binance_Trade_Quantity_Filter_Highlight}
                onChange={(e) => {
                  localStorage.setItem(
                    "DOM_4_Binance_Trade_Quantity_Filter_Highlight",
                    e.target.value
                  );
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }}
              />
              <p>------------------------</p>

              <p>Chart PriceFormat</p>
              <input
                type="number"
                placeholder={"insert number "}
                onChange={(e) => {
                  localStorage.setItem("ChartPriceFormat_4", e.target.value);
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }}
              />
            </TabContent>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
