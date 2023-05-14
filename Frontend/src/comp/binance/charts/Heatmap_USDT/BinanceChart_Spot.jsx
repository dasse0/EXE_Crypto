import React from "react";
import * as LightweightCharts from "lightweight-charts";

class ChartV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      width: 0,
      height: 0,
      margin: { top: 20, right: 20, bottom: 30, left: 50 },
    };
  }

  componentDidMount() {
    const priceFormat = localStorage.getItem("ChartPriceFormat") || 0.01;

    const symbol = localStorage.getItem("Binance_Symbol");
    const chartTimeframe =
      localStorage.getItem("Binance_ChartTimeframe") || "1s";

    const chart = LightweightCharts.createChart(
      document.querySelector(".BinanceCandlestickChart"),
      {
        width: getSelection(document.querySelector(".BinanceCandlestickChart"))
          .width,

        height: getSelection(document.querySelector(".BinanceCandlestickChart"))
          .height,
        overlayPriceScales: true,
        layout: {
          backgroundColor: "#000000",
          textColor: "rgba(255, 255, 255, 0.9)",
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
            top: 0.4,
            bottom: 0.4,
          },
          borderColor: "rgba(197, 203, 206, 0.8)",
        },
        timeScale: {
          tickMarkFormatter: (time, tickMarkType, locale) => {
            const date = new Date(time * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();
            const formattedTime =
              hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
            return formattedTime;
          },

          timeVisible: true,
          secondsVisible: true,
          rightOffset: 5,
          borderColor: "rgba(197, 203, 206, 0.8)",
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
      "wss://stream.binance.com:9443/ws/" + symbol + "@kline_" + chartTimeframe
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

    function getSelection(el) {
      var width = 0;
      var height = 0;
      var style = window.getComputedStyle(el);
      var hidden = style.display === "none";
      if (!hidden) {
        return {
          width: el.offsetWidth,
          height: el.offsetHeight,
        };
      }
      var els = el.style;
      var originalVisibility = els.visibility;
      var originalPosition = els.position;

      els.visibility = "hidden";
      els.position = "absolute";
      els.display = "block";

      width = el.clientWidth;
      height = el.clientHeight;

      els.display = "none";
      els.position = originalPosition;
      els.visibility = originalVisibility;

      return {
        width: width,
        height: height,
      };
    }
  }

  render() {
    return (
      <div>
        <div
          className="BinanceCandlestickChart_Nav"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            fontSize: "0.8rem",
          }}
        >
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "1s");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            1s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "1m");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            1m
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "5m");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            5m
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "15m");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            15m
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "30m");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            30m
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "1h");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            1h
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "4h");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            4h
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "1d");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            1d
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "1w");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            1w
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Binance_ChartTimeframe", "1M");
              window.location.reload();
            }}
            style={{
              textDecoration: "none",
              backgroundColor: "#555",
              color: "white",
              fontWeight: "bold",
            }}
          >
            1M
          </button>
        </div>
        <div className="BinanceCandlestickChart"></div>
      </div>
    );
  }
}

export default ChartV2;
