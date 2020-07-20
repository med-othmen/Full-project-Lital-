const express = require("express"),
  bodyParser = require("body-parser");
port = 2000;
var app = express();
var cors = require("cors");
// body parser for json form all data recived from response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// connexion au server
app.listen(port, (err) => {
  if (err) {
    console.log("Error when running the server");
  } else {
    console.log(`Server running on port ${port}`);
  }
});

//importing route product
var product = require("./app/Routes/ProductRouter.js");
var user = require("./app/Routes/UserRouter.js");
var history = require("./app/Routes/HistoryRouter");

// Use routers
app.use("/lital/product", product);
app.use("/lital/user", user);
app.use("/lital/history", history);

// part authentification

app.post("/login", (req, res) => {
  // verif exist

  // generl token

  //send token to cookie
  res
    .writeHead(200, {
      "Set-Cookie": "token=testsimplon; HttpOnly",
      "Access-Control-Allow-Credentials": "true",
    })
    .send();
});

app.get("/private", (req, res) => {
  if (!req.cookies.token) return res.status(401).send();
  res.send(req.coockies.token);
});
