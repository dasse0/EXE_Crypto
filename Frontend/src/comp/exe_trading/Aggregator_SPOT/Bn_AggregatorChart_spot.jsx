import React from "react";
import * as LightweightCharts from "lightweight-charts";
import { binance_symbol_1 } from "../../../lib/Binance/Global/GlobalVariables";

import "./Bn_CandlestickChart.css";
class Binance_Symbol_USDT_Chart_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

      width: 0,
      height: 0,
      margin: { top: 20, right: 20, bottom: 30, left: 10 },
    };
  }

  componentDidMount() {
    const priceFormat = localStorage.getItem("ChartPriceFormat_1") || 0.1;

    const chart = LightweightCharts.createChart(
      document.querySelector(".bn_chart_1_aggregator_SPOT"),
      {
        width: getSelection(
          document.querySelector(".bn_chart_1_aggregator_SPOT")
        ).width,

        height: getSelection(
          document.querySelector(".bn_chart_1_aggregator_SPOT")
        ).height,
        overlayPriceScales: true,
        layout: {
          backgroundColor: "#000000",
          textColor: "orange",
        },
        grid: {
          vertLines: {
            color: "#444",
          },

          horzLines: {
            color: "#222",
          },
        },

        crosshair: {
          mode: LightweightCharts.CrosshairMode.Normal,
        },

        rightPriceScale: {
          autoScale: true,
          scaleMargins: {
            top: 0.2,
            bottom: 0.2,
          },
          borderColor: "orange",
        },
        timeScale: {
          barSpacing: 1
          , // width chart candlestick
          tickMarkFormatter: (time, tickMarkType, locale) => {
            const date = new Date(time * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();
            const formattedTime =
              hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
            return formattedTime;
          },

          timeVisible: false,
          secondsVisible: true,
          rightOffset: 10,
          borderColor: "orange",
        },
      }
    );

    const candleSeries = chart.addCandlestickSeries({
      priceFormat: {
        type: "price",
        minMove: priceFormat,
      },

      upColor: "#0af",
      downColor: "red",
      borderDownColor: "red",
      borderUpColor: "#0af",
      wickDownColor: "red",
      wickUpColor: "#0af",
    });

    const volumeSeries = chart.addHistogramSeries({
      priceFormat: {
        type: "volume",
      },
      color: "#26a69a",
      overlay: true,
      scaleMargins: {
        top: 0.98,
        bottom: 0.01,
      },
    });

    const socket = new WebSocket(
      "ws://localhost:8080/binance_spot/ws/kline1m/" + binance_symbol_1
    );

    socket.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      const candlestick = data.k;
      candleSeries.update({
        time: candlestick.t / 1000,
        open: candlestick.o,
        high: candlestick.h,
        low: candlestick.l,
        close: candlestick.c,
      });

      volumeSeries.update({
        time: candlestick.t / 1000,
        value: candlestick.v,
      });

      socket.removeEventListener("message", function (event) {
        const data = JSON.parse(event.data);
        const candlestick = data.k;
        candleSeries.update({
          time: candlestick.t / 1000,
          open: candlestick.o,
          high: candlestick.h,
          low: candlestick.l,
          close: candlestick.c,
        });

        volumeSeries.update({
          time: candlestick.t / 1000,
          value: candlestick.v,
        });
      });
    });

    //get historical data
    fetch(
      "https://api.binance.com/api/v3/klines?symbol=" +
        binance_symbol_1.toUpperCase() +
        "&interval=1s&limit=1000"
    )
      .then((response) => response.json())
      .then((data) => {
        const ohlc = data.map((x) => {
          return {
            time: x[0] / 1000,
            open: x[1],
            high: x[2],
            low: x[3],
            close: x[4],
          };
        });

        const volume = data.map((x) => {
          return {
            time: x[0] / 1000,
            value: x[5],
          };
        });

        candleSeries.setData(ohlc);
        volumeSeries.setData(volume);
      });

    function resize() {
      const width = getSelection(
        document.querySelector(".bn_chart_1_aggregator_SPOT")
      ).width;
      const height = getSelection(
        document.querySelector(".bn_chart_1_aggregator_SPOT")
      ).height;

      chart.resize(width, height);
    }

    window.addEventListener("resize", resize);

    function getSelection(el) {
      let width = 0;
      let height = 0;
      if (typeof el.getBoundingClientRect === "function") {
        const rect = el.getBoundingClientRect();
        width = rect.width;

        height = rect.height;
      } else {
        width = el.offsetWidth;

        height = el.offsetHeight;
      }
      return { width, height };
    }
  }

  render() {
    return (
      <div>
        <div className="bn_chart_1_aggregator_SPOT"></div>
      </div>
    );
  }
}

export default Binance_Symbol_USDT_Chart_1;
