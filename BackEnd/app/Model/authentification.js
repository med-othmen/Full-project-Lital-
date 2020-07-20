var Cryptr = require("cryptr");
cryptr = new Cryptr("myTotalySecretKey");
var User = require("./UserModel");
var sql = require("./db.js");

exports.post = function (req, res) {
  sql.query(
    "select * from users where username = ?",
    req.body.username,
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
