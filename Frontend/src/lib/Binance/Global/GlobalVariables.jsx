export const APIkey = import.meta.env.VITE_API_KEY;
export const APIkeySecret = import.meta.env.VITE_API_KEY_SECRET;

//__________________________________________________________________________________________________
// DOM Settings

export const DOMbackgroundColor =
  localStorage.getItem("DOMbackgroundColor") || "black";
export const DOMfontColor = localStorage.getItem("DOMfontColor") || "orange";
export const DOMFONTSIZE = localStorage.getItem("DOMFONTSIZE") || 14;

//==================================================================================================
// DOM 1 Binance

export const binance_symbol_1 =
  localStorage.getItem("Binance_Symbol_USDT_DOM_1") || "btcusdt";

export const DOM_1_Binance_Trade_Quantity_Filter =
  Number(localStorage.getItem("DOM_1_Binance_Trade_Quantity_Filter")) || 0;

// Low means low only the text color get highlighted, not the background color
export const DOM_1_BinanceQuantityFilter_low =
  Number(localStorage.getItem("DOM_1_BinanceQuantityFilter_low")) || 1;

// High means highlighted background color
export const DOM_1_BinanceQuantityFilter_high =
  Number(localStorage.getItem("DOM_1_BinanceQuantityFilter_high")) || 5;

export const DOM1Symbol = localStorage.getItem("Binance_Symbol_USDT_DOM_1");

// DOM 1 Trade Quantity Filter Highlight
export const DOM_1_Binance_Trade_Quantity_Filter_Highlight =
  Number(
    localStorage.getItem("DOM_1_Binance_Trade_Quantity_Filter_Highlight")
  ) || 1;

//__________________________________________________________________________________________________
// DOM 2 Binance

export const binance_symbol_2 =
  localStorage.getItem("Binance_Symbol_USDT_DOM_2") || "ethusdt";

export const DOM_2_Binance_Trade_Quantity_Filter =
  Number(localStorage.getItem("DOM_2_Binance_Trade_Quantity_Filter")) || 0;

// Low means low only the text color get highlighted, not the background color
export const DOM_2_BinanceQuantityFilter_low =
  Number(localStorage.getItem("DOM_2_BinanceQuantityFilter_low")) || 10;

// High means highlighted background color
export const DOM_2_BinanceQuantityFilter_high =
  Number(localStorage.getItem("DOM_2_BinanceQuantityFilter_high")) || 50;

export const DOM2Symbol = localStorage.getItem("Binance_Symbol_USDT_DOM_2");

// DOM 2 Trade Quantity Filter Highlight
export const DOM_2_Binance_Trade_Quantity_Filter_Highlight =
  Number(
    localStorage.getItem("DOM_2_Binance_Trade_Quantity_Filter_Highlight")
  ) || 50;

//__________________________________________________________________________________________________
// DOM 3 Binance

export const binance_symbol_3 =
  localStorage.getItem("Binance_Symbol_USDT_DOM_3") || "bnbusdt";

export const DOM_3_Binance_Trade_Quantity_Filter =
  Number(localStorage.getItem("DOM_3_Binance_Trade_Quantity_Filter")) || 0;

// Low means low only the text color get highlighted, not the background color
export const DOM_3_BinanceQuantityFilter_low =
  Number(localStorage.getItem("DOM_3_BinanceQuantityFilter_low")) || 50;

// High means highlighted background color
export const DOM_3_BinanceQuantityFilter_high =
  Number(localStorage.getItem("DOM_3_BinanceQuantityFilter_high")) || 100;

export const DOM3Symbol = localStorage.getItem("Binance_Symbol_USDT_DOM_3");

// DOM 3 Trade Quantity Filter Highlight
export const DOM_3_Binance_Trade_Quantity_Filter_Highlight =
  Number(
    localStorage.getItem("DOM_3_Binance_Trade_Quantity_Filter_Highlight")
  ) || 50;

  //__________________________________________________________________________________________________
// DOM 4 Binance

export const binance_symbol_4 =
localStorage.getItem("Binance_Symbol_USDT_DOM_4") || "xrpusdt";

export const DOM_4_Binance_Trade_Quantity_Filter =
Number(localStorage.getItem("DOM_4_Binance_Trade_Quantity_Filter")) || 0;

// Low means low only the text color get highlighted, not the background color
export const DOM_4_BinanceQuantityFilter_low =
Number(localStorage.getItem("DOM_4_BinanceQuantityFilter_low")) || 100000;

// High means highlighted background color
export const DOM_4_BinanceQuantityFilter_high =
Number(localStorage.getItem("DOM_4_BinanceQuantityFilter_high")) || 1000000;

export const DOM4Symbol = localStorage.getItem("Binance_Symbol_USDT_DOM_4");

// DOM 4 Trade Quantity Filter Highlight
export const DOM_4_Binance_Trade_Quantity_Filter_Highlight =
Number(
  localStorage.getItem("DOM_4_Binance_Trade_Quantity_Filter_Highlight")
) || 1000;

  //__________________________________________________________________________________________________
// DOM 5 Binance

export const binance_symbol_5 =
localStorage.getItem("Binance_Symbol_USDT_DOM_5") || "dogeusdt";

export const DOM_5_Binance_Trade_Quantity_Filter =
Number(localStorage.getItem("DOM_5_Binance_Trade_Quantity_Filter")) || 0;

// Low means low only the text color get highlighted, not the background color
export const DOM_5_BinanceQuantityFilter_low =
Number(localStorage.getItem("DOM_5_BinanceQuantityFilter_low")) || 100000;

// High means highlighted background color
export const DOM_5_BinanceQuantityFilter_high =
Number(localStorage.getItem("DOM_5_BinanceQuantityFilter_high")) || 1000000;

export const DOM5Symbol = localStorage.getItem("Binance_Symbol_USDT_DOM_5");

// DOM 4 Trade Quantity Filter Highlight
export const DOM_5_Binance_Trade_Quantity_Filter_Highlight =
Number(
  localStorage.getItem("DOM_5_Binance_Trade_Quantity_Filter_Highlight")
) || 5000;

  //__________________________________________________________________________________________________
// DOM 6 Binance

export const binance_symbol_6 =
localStorage.getItem("Binance_Symbol_USDT_DOM_6") || "eosusdt";

export const DOM_6_Binance_Trade_Quantity_Filter =
Number(localStorage.getItem("DOM_6_Binance_Trade_Quantity_Filter")) || 0;

// Low means low only the text color get highlighted, not the background color
export const DOM_6_BinanceQuantityFilter_low =
Number(localStorage.getItem("DOM_6_BinanceQuantityFilter_low")) || 10000;

// High means highlighted background color
export const DOM_6_BinanceQuantityFilter_high =
Number(localStorage.getItem("DOM_6_BinanceQuantityFilter_high")) || 100000;

export const DOM6Symbol = localStorage.getItem("Binance_Symbol_USDT_DOM_6");

// DOM 4 Trade Quantity Filter Highlight
export const DOM_6_Binance_Trade_Quantity_Filter_Highlight =
Number(
  localStorage.getItem("DOM_6_Binance_Trade_Quantity_Filter_Highlight")
) || 500;

//==================================================================================================
//========================================== Charts ================================================
//==================================================================================================
// Chart 1 Binance USDT

export const priceFormat_1 = localStorage.getItem("ChartPriceFormat_1") || 0.1;
export const priceFormat_2 = localStorage.getItem("ChartPriceFormat_2") || 0.1;
export const priceFormat_3 = localStorage.getItem("ChartPriceFormat_3") || 0.1;
export const priceFormat_4 = localStorage.getItem("ChartPriceFormat_4") || 0.1;
export const priceFormat_5 = localStorage.getItem("ChartPriceFormat_5") || 0.1;
export const priceFormat_6 = localStorage.getItem("ChartPriceFormat_6") || 0.1;



export const DOM_Table_height = localStorage.getItem("DOM-Table-Height") || localStorage.setItem("DOM-Table-Height", 8);
export const DOM_Trade_height = localStorage.getItem("DOM-Traded-Height") || localStorage.setItem("DOM-Traded-Height", 800);

// SPOT ORDERBOOK DECIMALS

export const Orderbook_Decimals_1 = localStorage.getItem("Orderbook_Decimals_1");
export const Orderbook_Decimals_2 = localStorage.getItem("Orderbook_Decimals_2");


// Aggregator Symbol 1 Binance Spot	
// Only base symbol is needed, the quote symbol is always USDT or USD depends on the exchange api . Like "btc" + USDT 
export const Aggregator_Symbol_1_spot = localStorage.getItem("Aggregator_Symbol_1_spot") || "btc";

