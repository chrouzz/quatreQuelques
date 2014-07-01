var jwt = require('jsonwebtoken');

module.exports.issueToken = function(payload) {
  var token = jwt.sign(payload, process.env.TOKEN_SECRET || "seccret key");
  return token;
};

module.exports.verifyToken = function(token, verified) {
  return jwt.verify(token, process.env.TOKEN_SECRET || "secret key", {}, verified);
};