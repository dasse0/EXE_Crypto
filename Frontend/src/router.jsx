/* eslint-disable jsx-a11y/heading-has-content */
import "./Router.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// view

//components

//import Wallet from "../../../comp/ui/Tools/Wallet/Wallet";*/
import Ec from "./view/pages/ec/ec_main/ec_main";

import API_Insert from "./view/pages/api/apikeyinsert";
import Binance_USDT_DOM_2X from "./view/pages/binance/DOM/Binance_USDT_DOM_2X";
import Binance_USDT_DOM_4X from "./view/pages/binance/DOM/Binance_USDT_DOM_4X";
import Binance_USDT_DOM_6X from "./view/pages/binance/DOM/Binance_USDT_DOM_6X";
import Heatmap_USDT from "./view/pages/binance/Heatmap_USDT";
import Login from "./view/Login";
//========== EXE Trading ======================================================================================
import Settings from "./view/pages/settings/settings";
import MarketOverview from "./view/pages/ec/ec_tools/market/Cryptolist";
import CryptoInfo from "./view/pages/ec/ec_tools/market/CryptoInfo";

//========== Trading Tools ================================================================================
import Aggregator_USDT from "./view/pages/ec/ec_tools/trading_tools/aggregators/aggregator_USDT/aggregator_USDT";
//=============================================================================================================
//Binance
//=============================================================================================================
export function MainView() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/EXE_Trading" element={<Ec />} />
        <Route path="/EXE_Trading/Settings" element={<Settings />} />
        <Route path="/EXE_Trading/MarketOverview"element={<MarketOverview />}/>
        <Route path="/EXE_Trading/MarketOverview/CrytpoInfo"element={<CryptoInfo />}/>
        <Route path="/EXE_Trading/TradingTools/Aggregator_USDT" element={<Aggregator_USDT />}/>
        <Route path="/EXE_Trading/TradingTools/Aggregator_USDT/Orders"/>
        {/*== Binance ==== API insert ===============*/}
        <Route path="/API_Insert" element={<API_Insert />} />
        {/*== Binance ==== Depth of market (DOM) ====*/}
        <Route path="/Bn_USDT_DOM_2X" element={<Binance_USDT_DOM_2X />} />
        <Route path="/Bn_USDT_DOM_4X" element={<Binance_USDT_DOM_4X />} />
        <Route path="/Bn_USDT_DOM_6X" element={<Binance_USDT_DOM_6X />} />
        <Route path="/HeatmapUSDT" element={<Heatmap_USDT />} />
      </Routes>
    </>
  );
}
export default MainView;