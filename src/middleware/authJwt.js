const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");
const db = require("../../models");
const User = db.user;

verifyToken = (req, res, next) => {
//   let idToken;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer ')
//   ) {
//     idToken = req.headers.authorization.split('Bearer ')[1];
//   } else {
//     return res.status(403).json({ text: 'Unauthorized', type: 'error' });
//   }


//    if (!idToken) {
//     return res.status(403).json({
//       text: "No token provided!",
//       type: 'error' });

// jwt.verify(idToken, config.secret,  async (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ text: 'Unauthorized', type: 'error' });
//     }

//     let user = await User.findByPk(decoded.id);
//     req.user = user;
//     req.userId = decoded.id;
//     next();
//   });
// };
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No Token Provided"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};


isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    let { deletedAt, suspendedAt} = user;
     user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin" && !deletedAt && !suspendedAt) {
          next();
          return;
        }
      }
      return res.status(403).json({  message: { text: 'Require Admin Role!', type: 'error'}});
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};

module.exports = authJwt;