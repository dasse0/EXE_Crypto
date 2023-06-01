import React from "react";
import { Routes, Route } from "react-router-dom";
import "./aggregator.css";

import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "rsuite/dist/rsuite-custom.css";
import Bn_AggreComponent_USDT from "../../../../../../../comp/exe_trading/Aggregator_USDT/AggreComponent_USDT";
export default function Aggregator_USDT() {
  return (
    <div className="TradingTools-Aggregator">
      <div className="Aggregator-Content">
        <div className="Aggregator-Content-2">
        <Bn_AggreComponent_USDT/>
        </div>
      </div>

      <div className="Aggregator-Sidebar">
        <Sidenav
          defaultOpenKeys={["1"]}

          activeKey="1"
          appearance="inverse"
          style={{
            backgroundColor: "#191919",

            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item
                eventKey="1"
                style={{
                  backgroundColor: "#500",
                  border: "2px solid #f00",
                  fontSize: "20px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  window.location.href = "/EXE_Trading";
                }}
              >
                Back
              </Nav.Item>
              <Nav.Menu eventKey="1" title="Menu">
                <Nav.Item
                  eventKey="1-1"
                  href="/EXE_Trading/TradingTools/Aggregator/Orders"
                >
                  Orders
                </Nav.Item>
                <Nav.Item eventKey="1-2">Position</Nav.Item>
                <Nav.Item eventKey="1-3">Wallet</Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
}
