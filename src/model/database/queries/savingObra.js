const saveObra = (db, data) => {
  const saveQuery = `INSERT INTO obras SET ?`;

  db.query(saveQuery, {
    titulo: data.titulo,
    editora: data.editora,
    foto: data.foto,
    autores: data.autores,
  });
};

module.exports = saveObra;
