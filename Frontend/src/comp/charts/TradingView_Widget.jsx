// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_d0edc') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "CRYPTOCAP:TOTAL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: true,
            allow_symbol_change: true,
            container_id: "tradingview_d0edc"
            
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'
    >
      <div id='tradingview_d0edc' 
      style={{
        height: '99vh',
        width: '100%',
        }}/>
      
    </div>
  );
}
