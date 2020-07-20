const express = require("express");
const router = express.Router();
var aut = require("../controller/authenticate");
// get All Products
router.get("/verification", function (req, res) {
  aut.verification(req.body, function (err, res) {
    res.send(res);
  });
});

module.exports = router;
