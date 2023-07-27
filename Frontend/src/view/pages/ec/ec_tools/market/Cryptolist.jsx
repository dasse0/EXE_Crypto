import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Cryptolist.css";

export const CoinSymbol = React.createContext();

export default function Cryptolist() {
  const [userlist, setUserList] = useState([]);

  const page = localStorage.getItem("CryptoListPage");

  const handleFetchButtonClick = () => {
    const handleFetchButtonClickCall = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" +
            page +
            "&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
        );
        setUserList(response.data);
      } catch (error) {
        alert("You sending to many requests!");
      }
    };
    handleFetchButtonClickCall();
  };

  useEffect(() => {
    handleFetchButtonClick();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "orange",
        textAlign: "left",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",

        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
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
            <div
              style={{
                paddingLeft: "100px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                defaultValue={page}
                id="CryptoListPage"
                style={{
                  borderRadius: "10px",
                  width: "100px",
                  textAlign: "center",
                }}
                type="text"
                placeholder="Page Num"
              />

              <button
                style={{
                  height: "30px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  window.location.reload();
                  localStorage.setItem(
                    "CryptoListPage",
                    document.getElementById("CryptoListPage").value
                  );

                  handleFetchButtonClick();
                }}
              >
                Enter
              </button>
            </div>

            <div
             style={{
              paddingLeft: "100px",
              alignItems: "center",
              justifyContent: "center",
              
            }}
            >
              <button
              onClick={() => {
                window.location.href = "/EXE_Trading/CryptoExchanges";
              }}
               style={{
                backgroundColor: "#008",
                border: "2px solid blue",
                height: "30px",
                borderRadius: "5px",
                marginLeft: "10px",
               }}
              
              >Exchanges</button>
            </div>
          </ul>
        </nav>
      </div>
      <Table
        variant="dark"
        hover
        size="sm"
        style={{
          color: "orange",
          backgroundColor: "black",
          borderColor: "gray",
          fontSize: "12px",
          fontFamily: "monospace",
          hover: "true",
        }}
      >
        {/* Header bar */}
        <thead>
          <tr
            style={{
              position: "sticky",
              top: -2,
              textAlign: "center",
            }}
          >
            <th
              style={{
                width: "0.01%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const nameSorted = [...userlist].sort(
                      (a, b) => a.market_cap_rank > b.market_cap_rank
                    );
                    setUserList(nameSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const nameSorted = [...userlist].sort(
                      (a, b) => a.market_cap_rank < b.market_cap_rank
                    );
                    setUserList(nameSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Rank
            </th>
            <th
              style={{
                width: "0.01%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.symbol > b.symbol
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.symbol < b.symbol
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Symbol
            </th>
            <th
              style={{
                width: "0.01%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.name > b.name
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.name < b.name
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Name
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.current_price > b.current_price
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.current_price < b.current_price
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Price
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_24h <
                        b.price_change_percentage_24h
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_24h >
                        b.price_change_percentage_24h
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              24H
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_7d_in_currency <
                        b.price_change_percentage_7d_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_7d_in_currency >
                        b.price_change_percentage_7d_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              7D
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_14d_in_currency <
                        b.price_change_percentage_14d_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_14d_in_currency >
                        b.price_change_percentage_14d_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              14D
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_30d_in_currency <
                        b.price_change_percentage_30d_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_30d_in_currency >
                        b.price_change_percentage_30d_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              30D
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_1y_in_currency <
                        b.price_change_percentage_1y_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) =>
                        a.price_change_percentage_1y_in_currency >
                        b.price_change_percentage_1y_in_currency
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              1Y
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.total_volume > b.total_volume
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.total_volume < b.total_volume
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Volume
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.market_cap > b.market_cap
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.market_cap < b.market_cap
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Market Cap
            </th>
            <th
              style={{
                width: "0.1%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.circulating_supply > b.circulating_supply
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.circulating_supply < b.circulating_supply
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Circulating Supply
            </th>

            <th
              style={{
                width: "0.01%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                &nbsp;
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.total_supply > b.total_supply
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8593;
                </button>
                <button
                  onClick={() => {
                    const symbolSorted = [...userlist].sort(
                      (a, b) => a.total_supply < b.total_supply
                    );
                    setUserList(symbolSorted);
                  }}
                >
                  &#8595;
                </button>
              </div>
              Total Supply
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            borderColor: "#555",
          }}
        >
          {userlist.map((user) => (
            <tr
              onClick={() => {
                localStorage.setItem("symbol", user.symbol);
                localStorage.setItem("id", user.id);
                window.location.href = "/EXE_Trading/MarketOverview/CrytpoInfo";
              }}
              key={user.id}
            >
              <td>{user.market_cap_rank}</td>
              <td
                style={{
                  color: user.price_change_percentage_24h < 0 ? "red" : "cyan",
                }}
              >
                {user.symbol}
              </td>
              <td
                style={{
                  color: user.price_change_percentage_24h < 0 ? "red" : "cyan",
                }}
              >
                {user.name}
              </td>
              <td>{user.current_price}</td>
              <td
                style={{
                  backgroundColor:
                    user.price_change_percentage_24h < 0 ? "darkred" : "blue",
                }}
              >
                {user.price_change_percentage_24h_in_currency !== null
                  ? user.price_change_percentage_24h_in_currency.toFixed(2) +
                    "%"
                  : "N/A"}
              </td>

              <td
                style={{
                  backgroundColor:
                    user.price_change_percentage_7d_in_currency < 0
                      ? "darkred"
                      : "blue",
                }}
              >
                {user.price_change_percentage_7d_in_currency !== null
                  ? user.price_change_percentage_7d_in_currency.toFixed(2) + "%"
                  : "N/A"}
              </td>

              <td
                style={{
                  backgroundColor:
                    user.price_change_percentage_14d_in_currency < 0
                      ? "darkred"
                      : "blue",
                }}
              >
                {user.price_change_percentage_14d_in_currency !== null
                  ? user.price_change_percentage_14d_in_currency.toFixed(2) +
                    "%"
                  : "N/A"}
              </td>
              <td
                style={{
                  backgroundColor:
                    user.price_change_percentage_30d_in_currency < 0
                      ? "darkred"
                      : "blue",
                }}
              >
                {user.price_change_percentage_30d_in_currency !== null
                  ? user.price_change_percentage_30d_in_currency.toFixed(2) +
                    "%"
                  : "N/A"}
              </td>
              <td
                style={{
                  backgroundColor:
                    user.price_change_percentage_1y_in_currency < 0
                      ? "darkred"
                      : "blue",
                }}
              >
                {user.price_change_percentage_1y_in_currency !== null
                  ? user.price_change_percentage_1y_in_currency.toFixed(2) + "%"
                  : "N/A"}
              </td>
              <td>{user.total_volume}</td>
              <td>{user.market_cap}</td>
              <td>{user.circulating_supply}</td>
              <td>{user.total_supply}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
