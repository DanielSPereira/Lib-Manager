const db           = require("../model/database/db_connection/connectingDatabase");
const saveObra     = require("../model/database/queries/savingObra");
const queryingObra = require("../model/database/queries/queryingObra");
const updatingObra = require("../model/database/queries/updatingObra");
const deletingObra = require("../model/database/queries/deletingObra");

module.exports = {
  getObra: (req, res) => {
    try {
      queryingObra(db)
      res.json(global.result);
    } catch (err) {
      if (err) throw err;
    }
  },
  saveObra: (req, res) => {
    const data = req.body;

    try {
      saveObra(db, data);
      res.send("Obra salva com sucesso!");
    } catch (err) {
      if (err) throw err;
    }
  },
  updateObra: async (req, res) => {
    const data = req.body;
    const id = req.query.id;

    try {
      updatingObra(db, id, data);
      res.send("Obra atualizada com sucesso!");
    } catch (err) {
      if (err) throw err;
    }
  },
  deleteObra: (req, res) => {
    const id = req.query.id;

    try {
      deletingObra(db, id);
      res.send("Obra foi Deletada com sucesso!");
    } catch (err) {
      if (err) throw err;
    }
  },
};
