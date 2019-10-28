const CreditCard = require('../models/credit-card');

const getAll = (req, res) => {
  res.json(CreditCard.getAll());
};

const create = (req, res) => {
  const data = req.body;
  const creditCard = CreditCard.create(data);
  res.json(creditCard);
};

module.exports = Object.freeze({
  getAll,
  create,
});
