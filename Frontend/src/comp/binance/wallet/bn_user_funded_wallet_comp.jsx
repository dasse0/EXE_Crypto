import react from "react";

import axios from "axios";
import Table from "react-bootstrap/Table";

import "./bn_user_funded_wallet_comp.css";
export default function Binance_Wallet() {
  const [wallet, setWallet] = react.useState([]);

  react.useEffect(() => {
    axios
      .post(
        "http://localhost:8079/binance/getUserAsset/" +
          localStorage.getItem("binance_api_key") +
          "/" +
          localStorage.getItem("binance_secret_key")
      )
      .then((response) => {
        const sort = response.data.sort((a, b) => b.free.localeCompare(a.free));
        setWallet([...sort]);

      });
  }, []);

  return (
    <div className="Binance_wallet_main_div">
     

      <div className="Binance_Wallet_AllCoins_div">
        Funded wallet
        <Table className="Binance_Wallet_AllCoins_Table" bordered>
          <thead>
            <tr>
              <th>
                <div className="Binance_Wallet_AllCoins_navbar">
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        a.asset.localeCompare(b.asset)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬆
                  </button>
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        b.asset.localeCompare(a.asset)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬇
                  </button>
                </div>
                Name
              </th>
              <th>
                <div className="Binance_Wallet_AllCoins_navbar">
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        a.free.localeCompare(b.free)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬆
                  </button>
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        b.free.localeCompare(a.free)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬇
                  </button>
                </div>
                Free
              </th>
              <th>
                <div className="Binance_Wallet_AllCoins_navbar">
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        a.locked.localeCompare(b.locked)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬆
                  </button>
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        b.locked.localeCompare(a.locked)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬇
                  </button>
                </div>
                Locked
              </th>
              <th>
                <div className="Binance_Wallet_AllCoins_navbar">
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        a.freeze.localeCompare(b.freeze)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬆
                  </button>
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        b.freeze.localeCompare(a.freeze)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬇
                  </button>
                </div>
                Freezed
              </th>
              <th>
                <div className="Binance_Wallet_AllCoins_navbar">
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        a.freeze.localeCompare(b.freeze)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬆
                  </button>
                  <button
                    className="Binance_Wallet_AllCoins_navbar_buttons"
                    onClick={() => {
                      const sort = wallet.sort((a, b) =>
                        b.withdraw.localeCompare(a.withdraw)
                      );
                      setWallet([...sort]);
                    }}
                  >
                    ⬇
                  </button>
                </div>
                Withdraw
              </th>
            </tr>
          </thead>
          <tbody>
            {wallet.map((wallet) => (
              <tr key={
                wallet.asset
              }>
                <td>{wallet.asset}</td>
                <td>{wallet.free}</td>
                <td>{wallet.locked}</td>
                <td>{wallet.freeze}</td>
                <td>{wallet.withdrawing}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
