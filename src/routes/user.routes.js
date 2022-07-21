const controller = require("../controllers/user.controller");
const { authJwt } = require("../middleware");
// const { isAdmin } = require("../middleware/authJwt");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

//   app.get("/api/test/all", contoller.allAccess);
  app.get("/api/test/user", 
    [authJwt.verifyToken],
    controller.userBoard
    );

  app.get("/api/test/admin", 
    [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

  app.post(
    "/api/admin/users",
    controller.createRecord
  );

  app.put(
    "/api/admin/users/:id",
    controller.updateRecordById
  );


  app.get(
    "/api/admin/users",
    [authJwt.verifyToken],
    controller.getAllRecords
  );

  app.get(
    "/admin/users/:id",
    [authJwt.verifyToken],
    controller.getRecordById
  );

  app.delete(
    "/admin/users/:id",
    [authJwt.verifyToken],
    controller.deleteRecordById
  );
};