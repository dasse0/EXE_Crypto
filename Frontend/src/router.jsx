/* eslint-disable jsx-a11y/heading-has-content */
import "./Router.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// view

//components

//import Wallet from "../../../comp/ui/Tools/Wallet/Wallet";*/
import Ec from "./view/pages/ec/ec_main/ec_main";
import API_Insert from "./view/pages/api/apikeyinsert";

// ==== Binance SPOT ====
import Binance_SPOT_DOM_1X from "./view/pages/binance/DOM/Binance_SPOT_DOM_1X";
import Binance_SPOT_DOM_2X from "./view/pages/binance/DOM/Binance_SPOT_DOM_2X";
// ==== Binance USDT ====
import Binance_USDT_DOM_2X from "./view/pages/binance/DOM/Binance_USDT_DOM_2X";
import Binance_USDT_DOM_4X from "./view/pages/binance/DOM/Binance_USDT_DOM_4X";
import Binance_USDT_DOM_6X from "./view/pages/binance/DOM/Binance_USDT_DOM_6X";
import Heatmap_USDT from "./view/pages/binance/Heatmap_USDT";
import Login from "./view/Login";
//========== EXE Trading ======================================================================================
import Settings from "./view/pages/settings/settings";
//==== Market Analysis ====
import MarketOverview from "./view/pages/ec/ec_tools/market/Cryptolist";
import CryptoInfo from "./view/pages/ec/ec_tools/market/CryptoInfo";
import CryptoExchanges from "./view/pages/ec/ec_tools/market/ExchangeList";

import TradingViewWidget from "./comp/charts/TradingView_Widget";

//========== Trading Tools ================================================================================
import Aggregator_USDT from "./view/pages/ec/ec_tools/trading_tools/aggregators/aggregator_USDT/aggregator_USDT";
import Aggregator_SPOT from "./view/pages/ec/ec_tools/trading_tools/aggregators/aggregator_SPOT/aggregator_SPOT";
//=============================================================================================================
//Binance
//=============================================================================================================

import Binance_Wallet from "./view/pages/binance/Wallet/Binance_Wallet";
export function MainView() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EXE_Trading" element={<Ec />} />
        <Route path="/EXE_Trading/Settings" element={<Settings />} />
        <Route
          path="/EXE_Trading/MarketOverview"
          element={<MarketOverview />}
        />
        <Route
          path="/EXE_Trading/CryptoExchanges"
          element={<CryptoExchanges />}
        />

        <Route
          path="/EXE_Trading/MarketOverview/CrytpoInfo"
          element={<CryptoInfo />}
        />

        <Route
          path="/EXE_Trading/TradingViewChart"
          element={<TradingViewWidget />}
        />
        <Route
          path="/EXE_Trading/TradingTools/Aggregator_SPOT"
          element={<Aggregator_SPOT />}
        />
        <Route
          path="/EXE_Trading/TradingTools/Aggregator_USDT"
          element={<Aggregator_USDT />}
        />
        <Route path="/EXE_Trading/TradingTools/Aggregator_USDT/Orders" />
        {/*== Binance ==== API insert ===============*/}
        <Route path="/API_Insert" element={<API_Insert />} />
        {/*== Binance ==== Wallet ===================*/}
        <Route path="/Binance_Wallet" element={<Binance_Wallet />} />
        {/*== Binance ==== Depth of market (DOM) ====*/}

        <Route path="/Bn_SPOT_DOM_1X" element={<Binance_SPOT_DOM_1X />} />
        <Route path="/Bn_SPOT_DOM_2X" element={<Binance_SPOT_DOM_2X />} />
        <Route path="/Bn_USDT_DOM_2X" element={<Binance_USDT_DOM_2X />} />
        <Route path="/Bn_USDT_DOM_4X" element={<Binance_USDT_DOM_4X />} />
        <Route path="/Bn_USDT_DOM_6X" element={<Binance_USDT_DOM_6X />} />
        <Route path="/HeatmapUSDT" element={<Heatmap_USDT />} />
      </Routes>
    </>
  );
}
export default MainView;
