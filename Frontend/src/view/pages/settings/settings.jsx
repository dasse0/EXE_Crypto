import React from "react";

export default function Settings() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="Navbar">
        <div
          style={{
            backgroundColor: "black",
            color: "orange",
            fontSize: "16px",
            bold: "true",
            fontFamily: "monospace",
            textDecoration: "none",
            padding: "0px",
            borderColor: "darkorange",
            borderBottom: "1px solid darkorange",
            borderBottomColor: "darkorange",
            height: "50px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h6
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              paddingLeft: "10px",
            }}
          >
            EXE Trading
          </h6>
          <div
            style={{
              backgroundColor: "black",
              color: "orange",
              fontSize: "16px",
              bold: "true",
              fontFamily: "monospace",
              textDecoration: "none",
              padding: "10px",
              borderColor: "darkorange",
              borderBottom: "1px solid darkorange",
              borderBottomColor: "darkorange",
              height: "50px",
              width: "90%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => {
                // undo page
                window.history.back();
              }}
              style={{
                height: "30px",
                width: "80px",
                borderRadius: "10px",
                border: "1px solid red",
                backgroundColor: "#400",

                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "orange",
          fontSize: "12px",
          bold: "true",
          fontFamily: "monospace",
          textDecoration: "none",
          padding: "10px",
          border: "1px solid darkorange",

          alignItems: "center",

          height: "100%",
          width: "20%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h6>DOM Table Height</h6>
        <p>
          If you Have 1080p full HD monitor, it's recommended to change "Line
          Height number" into 4 and "Traded Height" into 460
        </p>
        <p>1080p monitor = 4 & 460</p>
        <p>1440p monitor = 8 & 650</p>
        <p>DOM Table Height </p>
        <input
          placeholder={localStorage.getItem("DOM-Table-Height")}
          type="number"
          id="height"
          name="height"
          min="1"
          max="10"
          style={{ width: "100px" }}
          onChange={(e) => {
            localStorage.setItem("DOM-Table-Height", e.target.value);
          }}
        />
        <br></br>
        <p>Traded Height</p>
        <input
          placeholder={localStorage.getItem("DOM-Traded-Height")}
          type="number"
          id="height"
          name="height"
          min="1"
          style={{ width: "100px" }}
          onChange={(e) => {
            localStorage.setItem("DOM-Traded-Height", e.target.value);
          }}
        />
        <br></br>
        <button
          onClick={() => {
            localStorage.setItem("DOM-Table-Height", 4);
            localStorage.setItem("DOM-Traded-Height", 460);
            window.history.back();
          }}
          style={{
            height: "30px",
            width: "80px",
            borderRadius: "10px",
            border: "1px solid yellow",
            backgroundColor: "#660",
            color: "white",
            fontSize: "16px",
          }}
        >
          1080p
        </button>
        <br></br>
        <button
          onClick={() => {
            localStorage.setItem("DOM-Table-Height", 8);
            localStorage.setItem("DOM-Traded-Height", 650);
            window.history.back();
          }}
          style={{
            height: "30px",
            width: "80px",
            borderRadius: "10px",
            border: "1px solid red",
            backgroundColor: "#400",
            color: "white",
            fontSize: "16px",
          }}
        >
          1440p
        </button>
        <br></br>
        <button
          onClick={() => {}}
          style={{
            height: "30px",
            width: "80px",
            borderRadius: "10px",
            border: "1px solid red",
            backgroundColor: "#400",
            color: "white",
            fontSize: "16px",
          }}
        >
          Default
        </button>
      </div>
    </div>
  );
}
