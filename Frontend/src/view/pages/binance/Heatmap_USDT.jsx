import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import React, { PureComponent } from "react";

import Chart from "../../../comp/binance/charts/Range/Bn_Range_Chart_USDT_1";

export default function Heatmap_USDT() {
  return (
    <>
    <div  style={{ height: "1000px" }}> 

    <Chart/>



    </div>
    
    </>

  
  );
}
