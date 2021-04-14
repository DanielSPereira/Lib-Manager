const express = require("express");
const router = express.Router();
const obras = require("../controller/routesControl");

router
  .get("/obras", obras.getObra)
  .post("/obras", obras.saveObra)
  .put("/obras", obras.updateObra)
  .delete("/obras", obras.deleteObra);

module.exports = router;
