let jwt = require("jsonwebtoken");
var logoutUser = async (req, res) => {
  var token = req.headers.authorization?.split(" ")[1];
  // jwt.verify(token, "token", (err, decoded) => {
  //   if (err) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }
  //   token = "";
  //   res.json({ message: "Logged out successfully" });
  // });

  jwt.sign(token, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You have been Logged Out" });
    } else {
      res.send({ msg: "Error" });
    }
  });
};
module.exports = {
  logoutUser,
};
