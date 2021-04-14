const updatingObra = (db, id, data) => {
  const updateQuery = `UPDATE obras SET titulo = ?, editora = ?, foto = ?, autores = ? WHERE id = ${id}`;

  db.query(updateQuery, [data.titulo, data.editora, data.foto, data.autores]);
};

module.exports = updatingObra;
