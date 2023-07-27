import React from "react";
import { Routes, Route } from "react-router-dom";
import "./ec_main.css";

import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "rsuite/dist/rsuite-custom.css";

import MarketOverview from "../ec_tools/market/Cryptolist";

export default function Startpage() {
  return (
    <div className="ec_main">
      {/* ==================== EXE Crypto ========================== */}
      <div
        className="EXE_Crypto"
        style={{
          display: "flex",

          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          width: "250px",
          borderRight: "1px solid darkorange",
        }}
      >
        <Sidenav
          appearance="inverse"
          style={{
            backgroundColor: "#191919",

            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <Sidenav.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100vh",
            }}
          >
            <Nav activeKey="1">
              <Nav.Item
                eventKey="1"
                style={{ textDecoration: "none", backgroundColor: "#22a" }}
                onClick={() => {
                  window.location.href = "/dev";
                }}
              >
                Dev View
              </Nav.Item>

              <Nav.Item
                eventKey="1"
                style={{ textDecoration: "none", backgroundColor: "#900" }}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Log Out
              </Nav.Item>
              <Nav.Item
                eventKey="1"
                style={{ textDecoration: "none", backgroundColor: "#405" }}
                onClick={() => {
                  window.location.href = "/API_Insert";
                }}
              >
                Insert API Key
              </Nav.Item>
              <Nav.Item
                eventKey="2"
                style={{ textDecoration: "none", backgroundColor: "#205" }}
                onClick={() => {
                  window.location.href = "/EXE_Trading/Settings";
                }}
              >
                Settings
              </Nav.Item>
              <Nav.Item
                eventKey="3"
                style={{ textDecoration: "none", backgroundColor: "#146" }}
                onClick={() => {
                  window.location.href = "/Binance_Wallet";
                }}
              >
                {" "}
                Wallet
              </Nav.Item>

              {/* ======= EXE Crypto = Market ========================== */}

              <Nav.Menu
                eventKey="1"
                title="Trading Tools"
                active="1"
                defaultActiveKey="1"
                open
              >
                {/* ======= EXE Crypto = Orderbook ========================== */}
                <Nav.Menu eventKey="1-1" title="Orderbooks">
                  <Nav.Menu
                    eventKey="1-1-1"
                    title="SPOT"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#444",
                    }}
                  >
                    <Nav.Item
                      eventKey="1-1-1-1"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href = "/Bn_SPOT_DOM_1X";
                      }}
                    >
                      1X
                    </Nav.Item>

                    <Nav.Item
                      eventKey="1-1-1-2"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href = "/Bn_SPOT_DOM_2X";
                      }}
                    >
                      2X
                    </Nav.Item>
                  </Nav.Menu>

                  <Nav.Menu
                    eventKey="1-1-2"
                    title="USDT"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#444",
                    }}
                  >
                    <Nav.Item
                      eventKey="1-1-2-1"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_1X";
                      }}
                    >
                      1X
                    </Nav.Item>

                    <Nav.Item
                      eventKey="1-1-2-2"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_2X";
                      }}
                    >
                      2X
                    </Nav.Item>

                    <Nav.Item
                      eventKey="1-1-2-3"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_4X";
                      }}
                    >
                      4X
                    </Nav.Item>

                    <Nav.Item
                      eventKey="1-1-2-4"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_6X";
                      }}
                    >
                      6X
                    </Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
                {/* ================== Aggregators ==================== */}
                <Nav.Menu eventKey="2-1" title="Aggregators">
                  <Nav.Menu
                    eventKey="2-1-1"
                    title="SPOT"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#444",
                    }}
                  >
                    <Nav.Item
                      eventKey="2-1-1-1"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href =
                          "/EXE_Trading/TradingTools/Aggregator_SPOT";
                      }}
                    >
                      Aggregator
                    </Nav.Item>

                    {/* change address to /EXE_Trading/Aggregator_SPOT/Settings 20203/05/14 */}

                    <Nav.Item
                      eventKey="2-1-1-2"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href =
                          "/EXE_Trading/Aggregator_USDT/Settings";
                      }}
                    >
                      Dual Aggregator
                    </Nav.Item>
                  </Nav.Menu>

                  <Nav.Menu
                    eventKey="5-1-1"
                    title="USDT"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#444",
                    }}
                  >
                    <Nav.Item
                      eventKey="5-1-1-1"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href =
                          "/EXE_Trading/TradingTools/Aggregator_USDT";
                      }}
                    >
                      Aggregator
                    </Nav.Item>

                    <Nav.Item
                      eventKey="5-1-1-2"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#555",
                      }}
                      onClick={() => {
                        window.location.href =
                          "/EXE_Trading/Aggregator_USDT/Settings";
                      }}
                    >
                      Dual Aggregator
                    </Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
                {/* ================== Charts ==================== */}
                <Nav.Menu
                  eventKey="3-1"
                  title="Charts"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#246",
                  }}
                >
                  <Nav.Item
                    eventKey="3-1-1"
                    onClick={() => {
                      window.location.href = "/EXE_Trading/TradingViewChart";
                    }}
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#228",
                    }}
                  >
                    TradingView
                  </Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      {/* ================================================== */}

      <div
        className="EXE_Crypto_MARKET" // EXE Crypto Market
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          width: "100%",
        }}
      >
        <MarketOverview />
      </div>
    </div>
  );
}
