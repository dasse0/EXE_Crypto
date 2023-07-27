import react, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function CryptoExchanges() {
  const [data, setData] = useState([]);
  const page = localStorage.getItem("CryptoExchangePage");


 

  const handleFetchButtonClick = () => {

    const handleFetchButtonClickCall = async () => {

     
        fetch("https://api.coingecko.com/api/v3/exchanges?per_page=250&page=" + page)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            }
            );


    };
    handleFetchButtonClickCall();
  };

  useEffect(() => {
    handleFetchButtonClick();
    

  }, []);

  return <div>
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
              paddingLeft: "0px",
              alignItems: "center",
              justifyContent: "center",
              
            }}
            >
              <button
              onClick={() => {
                window.location.href = "/EXE_Trading/";
              }}
               style={{
                backgroundColor: "#500",
                border: "2px solid red",
                paddingLeft: "10px",
                paddingRight: "10px",
                height: "30px",
                borderRadius: "5px",
                marginLeft: "10px",
               }}
              
              >Back</button>
            </div>
            <div
              style={{
                paddingLeft: "100px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                defaultValue={page}
                id="CryptoExchangePage"
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
                    "CryptoExchangePage",
                    document.getElementById("CryptoExchangePage").value
                  );

                  handleFetchButtonClick();
                }}
              >
                Enter
              </button>
            </div>
          </ul>
        </nav>
      </div>
    <Table  bordered hover style={{
        color: "orange",
        border: "1px solid #333",
    }}>
        <thead>
            <tr>
                <th>Exchange</th>
                <th>Trust Score</th>
                <th>Country</th>
                <th>Year Established</th>
                <th>Trade Volume (24h BTC)</th>
                
            </tr>
        </thead>
        <tbody 

        >
            {data.map((item) => (

                <tr
                style={{
                  lineHeight: "0.3",
                }}
                onClick={() => {
                   //opens browser to the exchange page

                  window.open(item.url, "_blank");



                }}
                
                    key={item.id}
                   
                >
                

                    <td>{item.name}</td>
                    <td>{item.trust_score}</td>
                    <td>{item.country}</td>
                    <td>{item.year_established}</td>
                    <td>{item.trade_volume_24h_btc}</td>
                
                </tr>
            ))}
        </tbody>
    </Table>

  </div>;
}

export default CryptoExchanges;
