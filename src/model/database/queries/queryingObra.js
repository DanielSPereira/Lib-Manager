const queryingObra = (db) => {
  const getQuery = `SELECT * FROM obras`;
  
  db.query(getQuery, (err, result) => {
    if (err) throw err;
    global.result = result;
  });
};

module.exports = queryingObra;
