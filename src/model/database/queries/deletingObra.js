const deletingObra = (db, id) => {
  const deleteQuery = `DELETE FROM obras WHERE id = ${id}`;

  db.query(deleteQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};

module.exports = deletingObra;
