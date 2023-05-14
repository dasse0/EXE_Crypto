import * as React from "react";
import "../lib/Binance/Global/GlobalVariables";
import "./Login.css";
import "./Login.scss";

export default function Startpage() {

 return (
  <div
   className="LoginBackground" //whole background
   style={{
    height: "100vh",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   <div // login box
    className="LoginDiv1"
    style={{
     marginTop: "0",
     height: "290px",
     color: "#fff",
     width: "600px",
     justifyContent: "center",
     alignItems: "center",
     borderRadius: "20px",
    }}
   >
    <svg className="Loginlogo" />
    <div>
     <input
      type="text"
      placeholder="Username"
      style={{ padding: 10, fontSize: 14 }}
     />
     <input
      type="Password"
      placeholder="Password"
      style={{ padding: 10, fontSize: 14 }}
     />

        <div>
      <button
       style={{
        width: "100px",
        padding: "10px",
        borderRadius: "30px",
        marginTop: "10px",
       }}
       type="submit"
       value="Login"
       onClick={() => {

        window.location.href = "/EXE_Trading";
       }}
      >
       Login
      </button>
     </div>
    </div>
   </div>
  </div>
 );
}
