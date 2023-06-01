import React from "react";
import { Routes, Route } from "react-router-dom";
import "./ec_main.css";

import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "rsuite/dist/rsuite-custom.css";

export default function Startpage() {
  return (
    <div className="ec_main">
      {/* ==================== EXE Crypto ========================== */}
      <div
        className="EXE Crypto"
        style={{
          display: "flex",

          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
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
              <Nav.Menu
                eventKey="3"
                title="Market Analysis"
                style={{ textDecoration: "none", backgroundColor: "#222" }}
              >
                <Nav.Item
                  eventKey="3-1"
                  style={{ textDecoration: "none", backgroundColor: "#222" }}
                  onClick={() => {
                    window.location.href = "/EXE_Trading/MarketOverview";
                  }}
                >
                  Market Overview
                </Nav.Item>
              </Nav.Menu>

              <Nav.Menu eventKey="4" title="Trading Tools">
                {/* ======= EXE Crypto = Aggregators ========================== */}
                <Nav.Menu eventKey="4-1" title="Aggregators">
                                    
                <Nav.Menu
                    eventKey="4-1-1"
                    title="SPOT"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#444",
                    }}
                  >
                    <Nav.Item
                      eventKey="4-1-1-1"
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
                      eventKey="4-1-1-2"
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
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
      {/* ===================== Exhange ============================= */}

      <div
        className="Binance"
        style={{
          display: "flex",
          borderRight: "1px solid darkorange",

          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Sidenav
          appearance="inverse"
          defaultOpenKeys={["2"]}
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
                icon={<DashboardIcon />}
                style={{ textDecoration: "none", backgroundColor: "#191919" }}
              >
                Exchange
              </Nav.Item>
              {/* ===================== Binance EXCHANGE ============================= */}
              <Nav.Menu
                eventKey="2"
                title="Binance"
                style={{ textDecoration: "none", backgroundColor: "#191919" }}
              >
                <Nav.Item

                  onClick={() => {
                    window.location.href = "/Binance_Wallet";
                  }}
                  eventKey="2-1"
                  style={{ textDecoration: "none", backgroundColor: "#615" }}
                >
                  Wallet
                </Nav.Item>
                <Nav.Menu
                  eventKey="1-1"
                  title="SPOT"
                  style={{ textDecoration: "none", backgroundColor: "#339" }}
                >
                  <Nav.Menu
                    eventKey="1-1-1"
                    title="Depth of Market (DOM)"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#333",
                    }}
                  >
                    <Nav.Item
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#222",
                      }}
                      eventKey="1-1-1"
                      onClick={() => {
                        window.location.href = "/Bn_SPOT_DOM_1X";
                      }}
                    >
                      DOM 1X
                    </Nav.Item>
                    <Nav.Item
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#222",
                      }}
                      eventKey="1-1-2"
                      onClick={() => {
                        window.location.href = "/Bn_SPOT_DOM_2X";
                      }}
                    >
                      DOM 2X
                    </Nav.Item>
                
                
                  </Nav.Menu>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="2-1"
                  title="USD-M Futures"
                  style={{ textDecoration: "none", backgroundColor: "#339" }}
                >
                  <Nav.Menu
                    eventKey="2-1-1"
                    title="Depth of Market (DOM)"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#333",
                    }}
                  >
                    <Nav.Item
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#222",
                      }}
                      eventKey="2-1-1"
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_2X";
                      }}
                    >
                      DOM 2X
                    </Nav.Item>
                    <Nav.Item
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#222",
                      }}
                      eventKey="2-1-1"
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_4X";
                      }}
                    >
                      DOM 4X
                    </Nav.Item>
                    <Nav.Item
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#222",
                      }}
                      eventKey="2-1-1"
                      onClick={() => {
                        window.location.href = "/Bn_USDT_DOM_6X";
                      }}
                    >
                      DOM 6X
                    </Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="2-2"
                  title="Coin-M Futures"
                  style={{ textDecoration: "none", backgroundColor: "#369" }}
                >
                  <Nav.Menu
                    eventKey="2-2-1"
                    title="Depth of Market (DOM)"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#333",
                    }}
                  >
                    <Nav.Item
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#222",
                      }}
                      eventKey="2-2-1"
                      onClick={() => {
                        window.location.href = "/Bn_DOM_2X";
                      }}
                    >
                      DOM 2X
                    </Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
      {/* ==================== Binance ============================= */}

      <div
        className="Binance"
        style={{
          display: "flex",
          borderRight: "1px solid darkorange",

          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Sidenav
          appearance="inverse"
          defaultOpenKeys={["3", "4"]}
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
                icon={<DashboardIcon />}
                style={{ textDecoration: "none", backgroundColor: "#191919" }}
              >
                Binance
              </Nav.Item>

              <Nav.Menu
                eventKey="2"
                title="USD-M Futures"
                style={{ textDecoration: "none", backgroundColor: "#191919" }}
              >
                <Nav.Menu
                  eventKey="2-1"
                  title="Depth of Market (DOM)"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#333",
                  }}
                >
                  <Nav.Item
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#222",
                    }}
                    eventKey="2-1-1"
                    onClick={() => {
                      window.location.href = "/Bn_DOM_2X";
                    }}
                  >
                    DOM 2X
                  </Nav.Item>
                  <Nav.Item
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#222",
                    }}
                    eventKey="2-1-1"
                    onClick={() => {
                      window.location.href = "/Bn_DOM_4X";
                    }}
                  >
                    DOM 4X
                  </Nav.Item>
                  <Nav.Item
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#222",
                    }}
                    eventKey="2-1-1"
                    onClick={() => {
                      window.location.href = "/Bn_DOM_6X";
                    }}
                  >
                    DOM 6X
                  </Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      {/* ================================================== */}
    </div>
  );
}
