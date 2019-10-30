const CreditCard = require('../models/credit-card');

const getAll = (req, res) => {
  res.json(CreditCard.getAll());
};

const create = (req, res) => {
  res.json(CreditCard.create(req.body));
};

module.exports = Object.freeze({
  getAll,
  create,
});
