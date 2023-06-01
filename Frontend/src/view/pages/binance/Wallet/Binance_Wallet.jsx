import React from "react";
import Bn_user_funded_wallet_comp from "../../../../comp/binance/wallet/bn_user_funded_wallet_comp";
import Bn_futures_balance_comp from "../../../../comp/binance/wallet/bn_futures_balance_comp";

import "./Binance_Wallet.css";

export default function Binance_Wallet() {
  return (
    <>
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
                href="/EXE_Trading"
              >
                Back
              </a>
            </li>
          </ul>
        </nav>
        <div className="Binance_wallet_main_div"

        >
          <Bn_user_funded_wallet_comp />
          <Bn_futures_balance_comp />
        </div>
      </div>
    </>
  );
}
