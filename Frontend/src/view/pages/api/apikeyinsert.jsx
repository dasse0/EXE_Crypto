import { Sidenav, Nav } from "rsuite";
import "rsuite/dist/rsuite-custom.css";

export default function Main() {
  return (
    <>
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
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "red",
                }}
                href="/EXE_Trading/"
              >
                Back
              </a>
            </li>
          </ul>
        </nav>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            padding: "50px",
          }}
        >
          <Sidenav
            activeKey="1"
            appearance="inverse"
            style={{
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              padding: "50px",
              border: "1px solid orange",
              borderRadius: "10px",
              backgroundColor: "#000",
              
            }}
          >
            <Sidenav.Body
              style={{
                textAlign: "center",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: "300px",
                width: "50%",
              }}
            >
              <Nav>
                <Nav.Menu eventKey="1" title="Binance">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "auto",
                    }}
                  >
                    Insert your API and Secret Key
                    <input
                      type="text"
                      placeholder="API Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Secret Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{
                        border: "2px solid gray",
                        backgroundColor: "#222",
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </Nav.Menu>
                <Nav.Menu eventKey="2" title="Coinbase">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "auto",
                    }}
                  >
                    Insert your API and Secret Key
                    <input
                      type="text"
                      placeholder="API Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Secret Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{
                        border: "2px solid gray",
                        backgroundColor: "#222",
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </Nav.Menu>
                <Nav.Menu eventKey="3" title="Huobi">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "auto",
                    }}
                  >
                    Insert your API and Secret Key
                    <input
                      type="text"
                      placeholder="API Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Secret Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{
                        border: "2px solid gray",
                        backgroundColor: "#222",
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </Nav.Menu>
                <Nav.Menu eventKey="4" title="Kraken">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "auto",
                    }}
                  >
                    Insert your API and Secret Key
                    <input
                      type="text"
                      placeholder="API Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Secret Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{
                        border: "2px solid gray",
                        backgroundColor: "#222",
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </Nav.Menu>
                <Nav.Menu eventKey="5" title="Bitmex">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "auto",
                    }}
                  >
                    Insert your API and Secret Key
                    <input
                      type="text"
                      placeholder="API Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Secret Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{
                        border: "2px solid gray",
                        backgroundColor: "#222",
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </Nav.Menu>
                <Nav.Menu eventKey="6" title="ByBit">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "auto",
                    }}
                  >
                    Insert your API and Secret Key
                    <input
                      type="text"
                      placeholder="API Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Secret Key"
                      style={{
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{
                        border: "2px solid gray",
                        backgroundColor: "#222",
                        width: "60%",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Insert
                    </button>
                  </div>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      </div>
    </>
  );
}
