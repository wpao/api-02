const db = require('../config/db');

const Item = {
  getAll: (callback) => {
    db.query('SELECT * FROM product', callback);
  },
  
  getById: (id, callback) => {
    db.query('SELECT * FROM product WHERE id = ?', [id], callback);
  },
  
  create: (data, callback) => {
    db.query('INSERT INTO product SET ?', data, callback);
  },
  
  update: (id, data, callback) => {
    db.query('UPDATE product SET ? WHERE id = ?', [data, id], callback);
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM product WHERE id = ?', [id], callback);
  }
};

module.exports = Item;
