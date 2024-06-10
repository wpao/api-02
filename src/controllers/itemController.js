const Item = require('../models/itemModel');

exports.getAllItems = (req, res) => {
  Item.getAll((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.getItemById = (req, res) => {
  Item.getById(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results[0]);
  });
};

exports.createItem = (req, res) => {
  Item.create(req.body, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json({ id: results.insertId, ...req.body });
  });
};

exports.updateItem = (req, res) => {
  Item.update(req.params.id, req.body, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json({ message: 'Item updated successfully' });
  });
};

exports.deleteItem = (req, res) => {
  Item.delete(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json({ message: 'Item deleted successfully' });
  });
};
