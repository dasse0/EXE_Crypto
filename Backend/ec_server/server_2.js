var express = require("express");
var cors = require("cors");
var app = express();

const crypto = require("crypto");

app.use(cors(), express.json());

//************************************************************
//===================== BINANCE API ==========================
//************************************************************

//============================================================
//---- Wallet -------------------------------------------------
//============================================================

// Get all coins
app.get(
  "/binance/wallet/:apikey/:secretkey",

  (req, res) => {
    const apikey = req.params.apikey;
    const signature = req.params.secretkey;

    const timestamp = Date.now();

    const queryString = "timestamp=" + timestamp;

    const hmac = crypto.createHmac("sha256", signature);
    const signature2 = hmac.update(queryString).digest("hex");

    const url =
      "https://api.binance.com/sapi/v1/capital/config/getall?" +
      queryString +
      "&signature=" +
      signature2;

    const axios = require("axios");

    axios
      .get(url, {
        headers: {
          "X-MBX-APIKEY": apikey,
        },
      })
      .then(function (response) {
        // handle success
        res.send(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
);


// Get wallet snapshot
app.get(
  "/binance/wallet_snapshot/:apikey/:secretkey",

  (req /* FastifyRequest */, res /* FastifyReply */) => {
    const apikey = req.params.apikey;
    const signature = req.params.secretkey;

    const timestamp = Date.now();
    const params = {
        type: "SPOT",
    };

    const queryString = "timestamp=" + timestamp;

    const hmac = crypto.createHmac("sha256", signature);
    const signature2 = hmac.update(queryString).digest("hex");

    const url =
      "https://api.binance.com/sapi/v1/accountSnapshot?" +
      queryString +
      "&signature=" +
      signature2;

    const axios = require("axios");

    axios

      .get(url, {
        params,
        
        
        headers: {
          "X-MBX-APIKEY": apikey,

          
        },
      })
      .then(function (response) {
        // handle success
        res.send(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
);

// Get wallet User funded assets only
app.post("/binance/getUserAsset/:apikey/:secretkey", (req, res) => {
  const apikey = req.params.apikey;
  const signature = req.params.secretkey;


  const url_endpoint = "https://api.binance.com/";
  const url_path = "sapi/v3/asset/getUserAsset";

  //post request
  const axios = require("axios");
  const qs = require("qs");

  const timestamp = Date.now();

  const queryString = "timestamp=" + timestamp;

  const hmac = crypto.createHmac("sha256", signature);

  const signature2 = hmac.update(queryString).digest("hex");

  const url =
    url_endpoint +
    url_path +
    "?" +
    queryString +
    "&signature=" +
    signature2;

  const params = {
    timestamp: timestamp,
  };


  axios
    .post(url, qs.stringify(params), {
      headers: {
        "X-MBX-APIKEY": apikey,
      },
    })
    .then(function (response) {
      // handle success

      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});


// Get wallet User futures assets only
app.get("/binance/futures/futures_balance/:apikey/:secretkey", (req, res) => {
  const apikey = req.params.apikey;
  const signature = req.params.secretkey;

  const timestamp = Date.now();

  const queryString = "timestamp=" + timestamp;

  const hmac = crypto.createHmac("sha256", signature);
  const signature2 = hmac.update(queryString).digest("hex");

  const url =
    "https://fapi.binance.com/fapi/v2/balance?" +
    queryString +
    "&signature=" +
    signature2;

  const axios = require("axios");

  axios
    .get(url, {
      headers: {
        "X-MBX-APIKEY": apikey,
      },
    })
    .then(function (response) {
      // handle success
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});




app.listen(8079, function () {
  console.log("CORS-enabled web server listening on port 8079");
});
